
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const url = "mongodb+srv://franciscomapelli:GjlgZyW2HBi901FB@proyecto.pjan7.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto"

const app = express()

app.use(express.json())
app.use("/", router)

const connectToMongo = ()=>{
  mongoose.conecct(url)
} 

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
