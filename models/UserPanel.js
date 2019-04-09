const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPanelSchema = new Schema({
    comments : [{
        type : Schema.Types.ObjectId ,
        ref : 'comments'
    }] ,
    user : {
        type : Schema.Types.ObjectId ,
        ref : 'users'
    } ,
    addresses : [{
        type : Schema.Types.ObjectId ,
        ref : 'addresses'
    }] ,
    discountCode : {
        type : String
    } ,
    orders : {
        type : Schema.Types.ObjectId ,
        ref : 'orders'
    }
});

/**currently we dont have favorites. maybe later add it */

module.exports = UserPanel = mongoose.model('userpanels' , UserPanelSchema);