const express = require('express')

const port = 3000;

const app = express(); //http.createServer

app.use(express.static('public'));

app.get('/', (req, res) => { // if req.url ==='/'
    console.log('Get /');
    console.log('req.params', req.params);
    res.end('<!DOCTYPE html> <head> <link href="/css/style.css" rel="stylesheet" /> <title> Homepage </title> </head> <body> <h1> Express static </h1> <h2>  Apprenons a utiliser la methode static  </h2> <img src="/img/konexio.png"></body> </html>');
   
}); 

app.listen(port, () => {
    console.log(`Server satrted on port: ${port}`) // to confirme that server is started on that port
});