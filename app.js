require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")

const PORT=process.env.port

const app = express()

app.use(express.json())
app.use('/api/user',require('./routes/user'))

app.listen(PORT,()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/arun')
  .then(() => console.log('Connected!'));
    console.log(`Server is running on port no ${PORT}`)
})