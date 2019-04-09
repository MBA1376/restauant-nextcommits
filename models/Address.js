const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId ,
        ref : 'users'
    } ,
    strictAddress : {
        type : String ,
        required : true
    } ,
    addressTitle : {
        type : String ,
        required : true
    } ,
    phone : {
        type : String ,
        required : true
    } ,
    cords : {
        lat : {
            type : String
        } ,
        long : {
            type : String
        }
    }
});

const Address = mongoose.model('addresses' , AddressSchema);

module.exports = Address;