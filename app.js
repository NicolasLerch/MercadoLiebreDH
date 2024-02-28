const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

//Estas lineas le dicen a express que use public como recurso de archivos estaticos.
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`)
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

// GET REGISTER
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.post('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});


app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});