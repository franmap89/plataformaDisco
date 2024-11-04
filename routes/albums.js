const express = require("express");
const router = express.Router();
const Album = require("../models/Albums.js");

// Ruta para agregar un álbum
router.post("/", async (req, res) => {
    const { Título, Descripción, año, Canciones, Portada } = req.body;
    try {
        const nuevoAlbum = new Album({ Título, Descripción, año, Canciones, Portada });
        await nuevoAlbum.save();
        res.status(201).send("Álbum agregado con éxito");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al agregar el álbum");
    }
});

// Ruta que devuelve la información de un álbum específico
router.get("/:id", async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (!album) {
            return res.status(404).send("Álbum no encontrado");
        }
        res.status(200).send(album);
    } catch (error) {
        res.status(500).send("Error al obtener el álbum");
    }
});

// Ruta para editar un álbum
router.put("/:id", async (req, res) => {
    const { Título, Descripción, año, Canciones, Portada } = req.body;
    try {
        const albumActualizado = await Album.findByIdAndUpdate(
            req.params.id,
            { Título, Descripción, año, Canciones, Portada },
            { new: true, runValidators: true }
        );
        if (!albumActualizado) {
            return res.status(404).send("Álbum no encontrado");
        }
        res.status(200).send("Álbum actualizado con éxito");
    } catch (error) {
        res.status(500).send("Error al actualizar el álbum");
    }
});

// Ruta para eliminar un álbum
router.delete("/:id", async (req, res) => {
    try {
        const albumEliminado = await Album.findByIdAndDelete(req.params.id);
        if (!albumEliminado) {
            return res.status(404).send("Álbum no encontrado");
        }
        res.status(200).send("Álbum eliminado correctamente");
    } catch (error) {
        res.status(500).send("Error al eliminar el álbum");
    }
});

// Ruta que devuelve todos los álbumes
router.get("/", async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).send(albums);
    } catch (error) {
        res.status(404).send("Error al obtener álbumes");
    }
});

module.exports = router;
