require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
const { middlewaresGlobal } = require('./src/middlewares/middlewares');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    //console.log('Base conectada')
    app.emit('conectado');
})
.catch(e => console.log(e))

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewaresGlobal);
app.use(routes);


app.on('conectado',()=>{
    app.listen(3000, () => {
        console.log('Servidor Iniciado');
        console.log('http://localhost:3000');
    })
})
