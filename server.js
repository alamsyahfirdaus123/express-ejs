const express = require("express");
const app = express();

'use strict';

const express = require('express');
const port = 3000;

const app = express();

//memanggil css vil publick
app.use('/public', express.static(process.cod() + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res){
    res.rumber('pages/index');
})

app.get('/about', function(req, res) {
    res.render('pages/about',{
        about: 'Halaman Tentang',
        content: 'saya anak yg rajin menabung'
    })
});