console.log('hola mundo');
const { request, response } = require('express');//por convencion le ponemos el mismop nombre
const express = require('express');

const app= express();
app.get('/api',(req,res)=>{console.log('paso por api');
res.json({mensaje:'hola mundo', estado:'OK'}).status(200)});
app.listen(3000,() =>{console.log('escuchando en el puerto 3000')});

/*Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6



7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice 
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.2
npm notice
PS D:\TC\T2> node ./src/app.js
hola mundo
PS D:\TC\T2> npm start

> node./src/app.js

"node." no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
PS D:\TC\T2> node ./src/app.js
hola mundo
PS D:\TC\T2> npm start        

> t2@1.0.0 start
> node ./src/app.js

hola mundo
PS D:\TC\T2> npm start

> t2@1.0.0 start
> node ./src/app.js

hola mundo
escuchando en el puerto 3000
paso por api
*/