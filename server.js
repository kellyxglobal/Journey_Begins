const express = require('express')
const app = express()

//Accessing the website via the web browser by decalring route
app.get('/', (req, res) => {
    res.send('Welcome to my node websites')
})

app.get('/blogg', (req, res) => {
    res.send('Hello my name is Kelechi')
})

//Displaying the server page content on the screen via communication protocol
app.listen(3000, ()=> {
    console.log('My node app is running on port 3000')
})