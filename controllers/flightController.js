// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

const e = require('express');
const Flight = require('../models/Flight');
//Add  a Flight;

module.exports.renderNewForm=(req, res) => {
    res.redirect('/flights/');
};
exports.createFlight=async (req, res) => {
    const flight= req.body.flight;
    Flight.create({
        title : flight.title,
        time :flight.time,
        price :flight.price,
        date :flight.date,
    }, (err, newFlight)=>{
        if(err){
            return res.status(500).json({message:err})
        }else{
            res.send('Flight created')
        }
    })
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
};

//Get all Flight
exports.showAllFlights= async (req, res) => {
    const flights = await Flight.find({}, (err, flights)=>{
        if(err){
            return res.status(500).json({message:err})
        }else{
            res.send('All Flights')
        }
    });
    res.redirect('/flights/index')
};

// Get a single Flight

exports.showFlight = async (req, res) => {
    const flight = await Flight.findById(req.params.id)
    if(!flight){
        res.send('Cannot find Flight')
        return res.redirect('/flights')
    }
    res.send('Here is your Flight')
    res.redirect('/flights/show');
}

//Edit Flight

exports.renderEditForm = async (req, res) => {
    const flight = await Flight.findById(req.params.id)
    res.render('/flights/edit', { flight });
}
exports.updateFlight=async (req, res) => {
    const {id} = req.params;
    const flight = await Flight.findByIdAndUpdate(id, { ...req.body.flight }, (err, flights)=>{
        if(err){
            return res.status(500).json({message:err})
        }else{
            res.send('Flight Updated') 
        }
        });
   
    res.redirect(`/flights/${flight._id}`)
}

//Delete Flight
exports.deleteFlight=async (req, res) => {
    const { id } = req.params;
    await Flight.findByIdAndDelete(id);
    res.send('Your Flight was deleted successfully')
    res.redirect('/flights');
}


// exports=({
//     renderNewForm,
//     createFlight,
//     showAllFlights,
//     showFlight,
//     renderEditForm,
//     updateFlight,
//     deleteFlight
// })