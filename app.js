const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const postRoute = require('./routes/posts') 

const app = express()

app.use(bodyParser.json())
app.use('/posts', postRoute)

app.get('/',(req,res)=>{
    res.send('homepage')  
})

mongoose.connect(process.env.MongodbURL)

app.listen(3000,()=>{
    console.log('Server is up and running!')
})