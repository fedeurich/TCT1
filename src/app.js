console.log('hola mundo');
const { request, response } = require('express');//por convencion le ponemos el mismop nombre
const express = require('express');

const app= express();
app.get('/api',(req,res)=>{console.log('paso por api');
res.json({mensaje:'hola mundo', estado:'OK'}).status(200)});
app.listen(3000,() =>{console.log('escuchando en el puerto 3000')});

