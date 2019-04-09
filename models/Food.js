const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    price : {
        type : Number
    } ,
    image : {
        type : String
    } ,
    name : {
        type : String
    } ,
    description : {
        type : String
    } ,
    foodTitle : {
        type : String
    }
});

module.exports = Food = mongoose.model('foods' , FoodSchema);