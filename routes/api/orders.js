const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

/**load utils methods */
const frequenceOfFoods = require('../../utils/frequenceOfFoods');
const subtractQuantity = require('../../utils/subtractQuantity');

/**load Order model */
const Order = require('../../models/Order');
/**load Food model */
const Food = require('../../models/Food');
/**load Address model*/
const Address = require('../../models/Address');


/* @route   POST api/restaurant/registerOrder  */
/* @desc    add order for login user */
/* @access  Private */
router.post('/registerOrder' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    // const foodsArray = req.body.foods.split(',');
    const packagingCost = parseFloat(req.body.packagingCost);
    const trackingNumber = mongoose.Types.ObjectId();

    Order.findOne({user : req.user._id})
        .then(order => {
            if(!order) {
                errors.order = 'order not found';
                return res.status(404).json(errors);
            }
            order.payWay = req.body.payWay;
            order.payPort = req.body.payPort;
            order.description = req.body.description;
            order.confirmed = true;
            order.save()
                .then(order => res.json(order));
        });
    
    /*Promise
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
    */
}); 

/* @route   POST api/restaurant/addToCart/:foodId  */
/* @desc    add food to order for login user */
/* @access  Private */
router.post('/addToCart/:foodId' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};
    Order.findOne({user : req.user._id})
        .then(order => {
            if(!order) {
                const foods = [req.params.foodId];
                const newOrder = new Order({
                    foods ,
                    user : req.user._id
                });

                newOrder.save()
                    .then(order => res.json(order));
            }
            else{
                order.foods.push(req.params.foodId);
                console.log(order.foods);
                order.save()
                    .then( order => res.json(order));
            }
        })
        .catch( err => console.log(err));
});

/* @route   POST api/restaurant/getCart  */
/* @desc    get cart from order for login user */
/* @access  Private */
router.get('/getCart' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    
    const frequencesAndFoods = {};

    Order.findOne({user: req.user._id})
        .then(order => {
            frequencesAndFoods.frequenceTable =frequenceOfFoods(order.foods);
            return order.foods;
        })
        .then(foodIds => 
            Food.find()
            .where('_id')
            .in(foodIds)
            .exec((err , records) => {
                frequencesAndFoods.foods = records;
                res.json(frequencesAndFoods);
            })
        )
});

/* @route   POST api/restaurant/subQuantity/:id  */
/* @desc    subtract quantity order for login user */
/* @access  Private */
router.delete('/subQuantity/:id' , passport.authenticate('jwt' , {session:false}) , (req , res) => {
    Order.findOne({user : req.user._id})
        .then(order => {
            const filteredFoods = subtractQuantity(order.foods , req.params.id);
            order.foods = filteredFoods;
            return order.save();
        })
        .then(order => res.json(order))
        .catch(err => console.log(err));
});



module.exports = router;