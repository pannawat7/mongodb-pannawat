const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
    res.send("Sawasdee");
  });
  
  const eventRoutes = require('./routes/event.routes');
  app.use('/events', eventRoutes);

  app.listen(port, () => {
    console.log("App started at port: " + port);
  });