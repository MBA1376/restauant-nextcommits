const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String 
    } ,
    email : {
        type : String 
    } ,
    password : {
        type : String ,
        required : true
    } ,
    avatar : {
        type : String
    } ,
    date : {
        type : Date ,
        default : Date.now
    } ,
    phoneNumber : {
        type : String 
    } ,
    birthDate : {
        type : Date 
    } ,
    gender : {
        type : Boolean
    }
});


const User = mongoose.model('users' , UserSchema);

module.exports = User;