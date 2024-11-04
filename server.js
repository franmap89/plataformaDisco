const express = require('express');
const mongoose = require('mongoose');

const routerAlbums = require('./routes/albums.js');
const routerUsers = require('./routes/users.js'); 

const url = "mongodb+srv://franciscomapelli:GjlgZyW2HBi901FB@proyecto.pjan7.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto"

const app = express();

app.use(express.json());
const path = require("path");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


app.use('/albums', routerAlbums);
app.use('/users', routerUsers);


const connectToMongo = async () => {
  try {
    await mongoose.connect(url);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log("Error al conectar a MongoDB:", error);
  }
};

app.listen(5000, () => {
  console.log("Servidor escuchando en puerto 5000");
  connectToMongo();
});
