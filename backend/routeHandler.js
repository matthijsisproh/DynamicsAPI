const express = require('express');
const router = express.Router();

const Credential = require('./Credential.js');
const API_Handler = require('./API_Handler');


credential = new Credential(
    url="url",
    username= "username",
    password= "password*", 
    domain="", 
    version="", 
    workstation=""
    );


API = new API_Handler(credential);
filteredData = API.getQueryData("PostedInvoices", 100);


router.get('/Overview', (req, res) => {
    filteredData.then(function(result){
        var JSONdata = []
        for(var i = 0; i < result.data.length; i++){
            JSONdata.push(result.data[i]);
        }
        res.end(JSON.stringify(JSONdata));
    })
});

router.get('/TrackTrace', (req, res) => {
    filteredData.then(function(result){
        var JSONdata = []
        for(var i = 0; i < result.data.length; i++){
            JSONdata.push(result.data[i]);
        }
        res.end(JSON.stringify(JSONdata));
    })
});

router.get('/Billing', (req, res) => {
    filteredData.then(function(result){
        var JSONdata = []
        for(var i = 0; i < result.data.length; i++){
            JSONdata.push(result.data[i]);
        }
        res.end(JSON.stringify(JSONdata));
    })
});


module.exports = router;