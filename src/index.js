const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.use(morgan('combined'));

// Set the view engine
app.engine(
  'handlebars',
  exphbs({
    extname: '.hbs' // Specify the file extension for Handlebars templates
  })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render("home")
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});