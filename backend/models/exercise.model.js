const mongoose = require('mongoose');

//new schema mongoose
const Schema = mongoose.Schema;

//excerciseschema with multiple field username and their validations
const exerciseSchema = new Schema({
    username:{ type: String, required: true },
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
},{
    timestamps: true,  //include timestamps for modification and creation
});



//name for user schema
const Excercise = mongoose.model('Exercise', exerciseSchema);

//export User schema
module.exports = Excercise;