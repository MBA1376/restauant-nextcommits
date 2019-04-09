const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId ,
        ref : 'users'
    } ,
    text : {
        type : String ,
        required : true
    } ,
    date : {
        type : Date ,
        default : Date.now
    } , 
    emoji : {
        type : String
    }
});

module.exports = Comment = mongoose.model('comments' , CommentSchema);
