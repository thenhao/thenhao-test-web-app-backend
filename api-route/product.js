require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axiosObject = require('axios');

const router = express.Router();

console.log('port is: ', process.env.CARE_URL);

//when a get request is triggered on the default route
//to get product information
//link up with express database
//seperate file for db init ? or do here ?
//firestore
//datastore
//cloud sql ?
//backend api call to connect services
//'/api/v1/care/product'
router.get('/', async (req, res) => {
    //Inside default to get the product list from care route
    //to test without auth0
    console.log('Reached product urlß');
    console.log('process.env.CARE_URL', process.env.CARE_URL);
    try{
        const productData = await axiosObject.get(process.env.CARE_URL);
        res.status(200).json({data:productData.data.data}); 
    }
    catch (err) {
        res.send(err);
    }
    
})




module.exports = router;