// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

let notes = require("./db/db.json");

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});