require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

console.log(app);

//when a get request is triggered on the default route
app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

//to get product information
//link up with express database
//seperate file for db init ? or do here ?
//firestore
//datastore
//cloud sql ?
//backend api call to connect services
//'/api/v1/care/product'
const products = require('./api-route/product');
app.use('/product', products);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})