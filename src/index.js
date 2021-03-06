const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const { dirname } = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '\\resources\\views'));

//địa chỉ trang web
app.get('/', (req, res) => {
  return res.render('home');
})
app.get('/search', (req, res) => {
  return res.render('search');
})

// console.log(path.join(__dirname, '\\resources\\views')) Result: C:\Users\fritz\Documents\JSA_project\src\resources\views

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})