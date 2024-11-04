const mongoose = require('mongoose');

const Cancion = new mongoose.Schema({
    Título: { type: String, required: true },
    Duración: { type: Number, required: true }, 
});

const Albums = new mongoose.Schema({
    Título: { type: String, required: true },
    Descripción: { type: String },
    año: { type: Number, required: true },
    Canciones: [Cancion],
    Portada: { type: String },
});

module.exports = mongoose.model("Albums", Albums);