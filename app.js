require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layouts', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.listen(port, ()=>{
    console.log("App listening on port" + port);
})