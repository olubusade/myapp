var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
let path = require('path');
let medications = require('./model/medications.json');
let port = 3000;

const  router  =  express.Router();
//Cross-Origin Resource in use.
app.use(cors());
//Set access permission for header requests
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
   
}); 

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public/dist/myapp'))); //  "public" off of current is root

//Default API call
app.get('/', function (req, res) {
    if(res){
        res.status(200).send(`<html><body><h1>Simple Node.js Backend server for CyberPatient Take Home</h1></body></html>`);
        console.log('Simple Node.js Backend server for CyberPatient Take Home');
    }else{
        res.json({status:500, data:'Internal Server Error'});
    }
    
});
//GET method API call to fetch all medication records
app.get('/api/all-medications', function (req, res) {
    if(res){
        res.status(200).json(medications);
        console.log({status:200, message:'Successfully fetched medication data', data:medications});
    }else{
        res.status(500).json({status:500, data:'Internal Server Error'});
    }
});
//Inavlid API request
app.get('/**', function (req, res) {
    res.status(400).send('<html><body><h1>Invalid API Request</h1></body></html>');
    console.log('Invalid API Request');
});

app.listen(port, function () {
    console.log(`Node.js Backend server for CyberPatient Take Home is running on port:${port}`);
});