const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Accessing the website via the web browser by decalring route
app.get('/', (req, res) => {
    res.send('Welcome to my node websites')
})

app.get('/blogg', (req, res) => {
    res.send('Hello! Welcome to my world')
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