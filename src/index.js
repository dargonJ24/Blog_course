import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { engine } from 'express-handlebars';
import path from 'path';
import { route } from "./routes/index.js";
import { dbconnect } from "./config/db/index.js";
import mongoose from "mongoose";
const app = express();
const port = 3000;
//connect mongoose
try{
    console.log("connecting..")
   mongoose.connect('mongodb://127.0.0.1:27017/f8_course')
  .then(() => console.log('Connected!'));

 }catch(error){
    console.log('Connect failure')
 }
//seup static
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), './public')))
//set up handlebar
app.engine('hbs', engine({
    extname:'.hbs'
}));

app.set('view engine', 'hbs');
const url_1="src\resources\views\home.hbs"
app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), 'resources','views'));

//setup to use post
app.use(express.urlencoded({
    extended:true
}))// process format  form data
app.use(express.json()) // process format json'
//setup route
route(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});