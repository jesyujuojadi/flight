const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const methodOverride = require('method-override')
const app = express();

mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/flight_app')

app.use(json());

app.use("/flights", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
