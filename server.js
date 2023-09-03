const express = require('express')
const mongoose = require('mongoose')
const Gig = require('./models/gigModel')
const app = express()
//Specifying JSON middleware so that the application can understand JSON data format
app.use(express.json())

//Accessing the website via the web browser by decalring routes
app.get('/', (req, res) => {
    res.send('Welcome to my node websites')
})

app.get('/blogg', (req, res) => {
    res.send('Hello my name is Kelechi')
})

//A route for saving Models (gigModel.js and orderModel.js) in the database
app.post('/Gig', async(req, res) => {
    //console.log(req.body);
    //res.send(req.body)
    try {
        const gig = await Gig.create(req.body)
        res.status(200).json(gig);

    } catch (error) {
        console.log(error.messgae);
        res.status(500).json({message: error.message})
    }
})

//Connect to MongoDB
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://kellyxglobal:Kellxy0303@kellyx.iyxrisn.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    //Displaying the server page content on the screen via communication protocol
    app.listen(3000, ()=> {
    console.log('My node app is running on port 3000')
    });
}).catch(() => {
    console.log(error)
})