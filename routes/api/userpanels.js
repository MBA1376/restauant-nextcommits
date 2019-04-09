const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');

/**load Comment model */
const Comment = require('../../models/Comment');
/**load User model */
const User = require('../../models/User');
/**load Order model */
const Order = require('../../models/Order');
/**load Address model */
const Address = require('../../models/Address');
/**load Food model */
const Food = require('../../models/Food');

/* @route   GET api/userpanels/getLoginUserComments  */
/* @desc    get login user's comments about restaurant */
/* @access  Private */
router.get('/getLoginUserComments' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    Comment.find({user : req.user._id})
        .then(comments => {
            if(!comments) {
                errors.comments = 'no comment exist for this user';
                return res.status(400).json(errors);
            }

            res.json(comments);
        })
        .catch(err => console.log(err));
});


/* @route   POST api/userpanels/completeInfo  */
/* @desc    complete informations of user */
/* @access  Private */
router.post('/completeInfo' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    User.findByIdAndUpdate(req.user._id , req.body , {new: true})
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

/* @route   POST api/userpanels/changePassword  */
/* @desc    change password of login user */
/* @access  Private */
router.post('/changePassword' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    User.findById(req.user._id)
        .then(user => {
            
            user.password = req.body.password;

            bcrypt.genSalt(10 , (err , salt) => {
                bcrypt.hash(user.password , salt , (err , hash) => {
                    if(err) console.log(err);
                    
                    user.password = hash;

                    user.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        })
        .catch( err => console.log(err));
});

/* @route   POST api/userpanels/registerOrder  */
/* @desc    add order for login user */
/* @access  Private */
router.post('/registerOrder' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    const foodsArray = req.body.foods.split(',');
    const packagingCost = parseFloat(req.body.packagingCost);
    const trackingNumber = mongoose.Types.ObjectId();
    
    Promise
        .all(foodsArray.map(foodId => Food.findById(foodId, { price: 1 })))
        .then((foods) => {
            let totalPrice = 
            foods.reduce((acc, food) => acc+food.price, 0);
            totalPrice+=packagingCost;
           console.log(totalPrice);

            const order = new Order({
                foods : foodsArray ,
                packagingCost ,
                trackingNumber ,
                totalPrice ,
                description : req.body.description ,
                payWay : req.body.payWay ,
                payPort : req.body.payPort ,
                user : req.user._id
            });
            
            order.save()
                .then( order => res.json(order));
        })
        .catch(err => console.log(err));
});

/* @route   GET api/userpanels/getMyOrders  */
/* @desc    get orders of login user */
/* @access  Private */
router.get('/getMyOrders' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};
    console.log(req.user._id);
    Order.find({user : req.user._id})
        .then(orders => {
            if(!orders) {
                errors.orders = 'no order found';
                return res.status(400).json(errors);
            }
            console.log(orders);
            res.json(orders);
        })
        .catch(err => console.log(err));
});

/* @route   GET api/userpanels/getAddresses  */
/* @desc    get addresses of login user */
/* @access  Private */
router.get('/getAddresses' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    Address.find({user : req.user._id})
        .then(addresses => {
            if(!addresses) {
                errors.addresses = 'no address exist';
                return res.status(400).json(errors);
            }
            res.json(addresses);
        })
        .catch(err => console.log(err));
});

module.exports = router;