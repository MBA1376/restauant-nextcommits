const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

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


module.exports = router;