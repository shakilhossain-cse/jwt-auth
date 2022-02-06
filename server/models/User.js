const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    emailVarificationToken: {
        type:String,
        default:""
    },
    varified:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model('user', User)