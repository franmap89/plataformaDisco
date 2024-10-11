const mongoose = require('mongoose');



const CancionSchema = new mongoose.Schema({
    Título: { type: String, required: true },
    Duración: { type: Number, required: true }, 
  });
  
  const Propiedad = new mongoose.Schema({
    Título: { type: String, required: true },
    Descripción: { type: String },
    año: { type: Number, required: true },
    Canciones: [CancionSchema],
    Portada: { type: String },
  });


