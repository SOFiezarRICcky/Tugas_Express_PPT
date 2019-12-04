const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/route")
const uploadData = require("express-fileupload")

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(uploadData())

app.get('/', (req, res) => {
    res.render('index');
});

app.use("/dilo", routes)

app.listen(3000, () => {
    console.log("Server Berjalan di Port 3000");
})

app.post('/proses', (req, res) => {
    let name = req.body.nama
    let hobi = req.body.hobi
    let gambar = req.body.gambar

    res.send(`Nama Saya ${name} dan Hobi saya adalah ${hobi} gambar ${gambar}`)
})

app.get('/proses', (req, res) => {
    let name = req.body.nama
    let hobi = req.body.hobi

    res.send(`Nama Saya ${name} dan Hobi saya adalah ${hobi}`)
})

app.get('/proses/:id', (req, res) => {
    let id = req.params.id

    res.send(`Nama Saya adalah ${id}`)
})