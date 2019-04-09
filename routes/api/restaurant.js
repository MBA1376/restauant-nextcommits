const express = require('express');
const router = express.Router();
const passport = require('passport');

/**load sortFoods from utils */
const sortFoods = require('../../utils/sortFoods');

/**load Food model */
const Food = require('../../models/Food');
/**load Comment model */
const Comment = require('../../models/Comment');

/* @route   GET api/restaurant/getFoods  */
/* @desc    get foods of the restaurant */
/* @access  public */
router.get('/getFoods' , (req , res) => {
    const errors = {};

    Food.find()
        .then(foods => {
            if(!foods) {
                errors.foods =  'no food found !';
                return res.status(400).json(errors);
            }

            res.json(sortFoods(foods));
        })
        .catch(err => console.log(err));
});

/* @route   POST api/restaurant/addFood  */
/* @desc    add food for the restaurant */
/* @access  Public later have to set it private. when admin login to website can add food to restaurant  */
router.post('/addFood' , (req , res) => {
    const errors = {};

    //for now image there is not
    let food = {
        name : req.body.name ,
        price : req.body.price,
        foodTitle : req.body.foodTitle
    };
    
    //  food.description = req.body.description ? req.body.description : '';

    const newFood = new Food(food);

    newFood.save()
        .then(food => res.json(food))
        .catch(err => console.log(err) );
});

/* @route   DELETE api/restaurant/removeFood  */
/* @desc    remove food from restaurant */
/* @access  Public later have to set it private. when admin login to website can add food to restaurant  */
router.delete('/removeFood/:id' , (req , res) => {
    const errors = {};
    Food.findByIdAndRemove(req.params.id)
        .then(food => {
            if(!food) {
                errors.food = 'no food found by this id';
                return res.status(404).json(errors);
            }

            res.json(food);
        })
        .catch(err => console.log(err)) ;
});

/* @route   POST api/restaurant/addComment  */
/* @desc    add comment for restaurant */
/* @access  Private  */
router.post('/addComment' , passport.authenticate('jwt' , {session : false}) , (req ,res) => {
    const errors = {};

    //for now emoji there is not
    const newComment = {
        user : req.user._id ,
        text : req.body.text 
    };

    const comment = new Comment(newComment);

    comment.save()
        .then(comment => {
            res.json(comment);
        })
        .catch(err => console.log(err));

});

/* @route   GET api/restaurant/getComments  */
/* @desc    get comments about restaurant */
/* @access  Public */
router.get('/getComments' , (req ,res) => {
    const errors = {};

    Comment.find()
        .then(comments => {
            if(!comments) {
                errors.comment = 'no comment exist';
                return res.status(400).json(errors);
            }

            res.json(comments.reverse());
        })
        .catch(err => console.log(err));
})

/* @route   GET api/restaurant/getComments  */
/* @desc    get comments about restaurant */
/* @access  Public */
router.post('/filterFoods' , (req , res) => {
    const errors = {};

    Food.find({$or:[ {'name':req.body.text} , {'foodTitle' : req.body.text} , {'description': req.body.text}] })
        .then(foods => {
            if(!foods){
                errors.foods = 'no food exist';
                return res.status(400).json(errors);
            }
            res.json(foods);
        })
        .catch(err => console.log(err));

});

module.exports = router;