const mongoose = require('mongoose');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const Propiedad = new mongoose.Schema({
    Nombre: { type: String,  required: true },
    Apellido: { type: String,  required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return regex.test(v);
        },
        message: "Debes ingresar un mail válido",
      },
    },
    Contraseña: { type: String,  required: true },
    Favoritos: { type: String },
  });

