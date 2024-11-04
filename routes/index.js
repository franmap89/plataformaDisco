const express = require('express');
const router = express.Router();
const Album = require('../models/Albums.js');


const albums = require("./albums.js")
const users = require("./users.js")

app.router("/albums",albums)
app.router("/users",users)

module.exports = router;