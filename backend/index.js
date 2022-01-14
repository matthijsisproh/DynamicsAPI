const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routeHandler.js');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);
app.use('/Overview', routesHandler);
app.use('/TrackTrace', routesHandler);
app.use('/Billing', routesHandler);

const PORT = 4000;
app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}.`);
});