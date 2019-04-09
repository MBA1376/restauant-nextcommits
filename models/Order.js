const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    foods : [{
        type : Schema.Types.ObjectId ,
        ref : 'foods'
    }] ,
    user : {
        type : Schema.Types.ObjectId ,
        ref : 'users'
    } ,
    packagingCost : {
        type : Number ,
        default : 0
    } ,
    totalPrice : {
        type : Number ,
        default : 0
    } ,
    address : {
        type : Schema.Types.ObjectId ,
        ref : 'addresses'
    } ,
    date : {
        type : Date ,
        default : Date.now 
    } ,
    trackingNumber : {
        type : String
    } ,
    description : {
        type :String
    } ,
    payWay : {
        type : String
    } ,
    payPort : {
        type : String 
    } ,
    confirmed : {
        type : Boolean
    }
});

module.exports = Order = mongoose.model('orders' , OrderSchema);