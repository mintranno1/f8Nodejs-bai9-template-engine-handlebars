const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 7000;

// Log request to server
var morgan = require('morgan');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Set src view static
app.set('views', path.join(__dirname, 'resources/views'));

//Router
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});


app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`))