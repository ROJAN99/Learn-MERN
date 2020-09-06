const mongoose = require('mongoose');

//new schema mongoose
const Schema = mongoose.Schema;

//userschema with single field username and their validations
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true, //trim whitespace
        minlength: 3  
    },
},{
    timestamps: true,  //include timestamps for modification and creation
});


//name for user schema
const User = mongoose.model('User', userSchema);

//export User schema
module.exports = User;