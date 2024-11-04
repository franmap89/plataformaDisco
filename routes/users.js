const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");

// Ruta para crear un usuario
router.post("/", async (req, res) => {
    const { Nombre, Apellido, Email, Contraseña, Favoritos } = req.body;
    try {
        const constraseñaHasheada = await hashPassword(Contraseña);
        const newUser = new Users({ Nombre, Apellido, Email, Contraseña: constraseñaHasheada, Favoritos });
        await newUser.save();
        res.status(201).send("Usuario creado exitosamente");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al crear el usuario");
    }
});

// Ruta para obtener datos de usuario por ID, excluyendo la contraseña
router.get("/:id", async (req, res) => {
    try {
        const user = await Users.findById(req.params.id).select("-Contraseña");
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al obtener el usuario");
    }
});

// Ruta para editar los datos de un usuario
router.put("/:id", async (req, res) => {
    const { Nombre, Apellido, Email } = req.body;
    try {
        const updatedUser = await Users.findByIdAndUpdate(
            req.params.id,
            { Nombre, Apellido, Email },
            { new: true, runValidators: true, select: "-Contraseña" }
        );
        if (!updatedUser) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).send("Usuario actualizado exitosamente");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al actualizar el usuario");
    }
});

module.exports = router;
