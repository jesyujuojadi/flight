// exports.exampleModel = [];

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    title: String,
    time: [{
        hours:{
            type:Number, required:true,
        },
        minutes:{
            type:Number, required:true,
        },
        hour12:true


    }],
    price:Number,
    date: Date,
    
});

const Flight = mongoose.model("Flight", flightSchema);


module.exports = Flight;

