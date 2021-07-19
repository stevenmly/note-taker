const router = require('express').Router();
const { validateNote, writeToFile, findNote, deleteFile } = require('../../lib/notes')
let notes = require("../../db/db.json");

//api routes
router.get('./notes', (req,res) => {
    res.json(notes);
})

module.exports = router;