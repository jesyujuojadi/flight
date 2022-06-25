const express = require('express');
const { flightSchema } = require('../schemas.js');

const router = express.Router();
const controller = require('../controllers/flightController');

// const {
//     renderNewForm,
//     createFlight,
//     showAllFlights,
//     showFlight,
//     renderEditForm,
//     updateFlight,
//     deleteFlight
// }


router.get('/new', controller.renderNewForm);
router.post('flights', controller.createFlight)
router.get('/index', controller.showAllFlights)
router.get('/:id/edit', controller.renderEditForm)
router.get('/:id', controller.showFlight )
router.put('/:id', controller.updateFlight)
router.delete('/:id', controller.deleteFlight)



module.exports = router;

