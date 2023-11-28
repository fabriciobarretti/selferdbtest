const express = require ("express");
const mysql = require ("mysql2");
const PORT = 3302;
// const routes = require('./routes');

const app = express();

app.use(express.json());
// app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})

app.get("/", (req, res) => {
    res.send("Hello!");
});