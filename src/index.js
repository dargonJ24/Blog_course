import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { engine } from 'express-handlebars';
import path from 'path';
import { route } from "./routes/index.js";
import { dbconnect } from "./config/db/index.js";
import mongoose from "mongoose";
import methodOveride from "method-override"
import SortMiddlewares from "./app/SortMiddlewares/SortMiddlewares.js";
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
    extname:'.hbs',
    helpers:{
        sum :(a,b)=>a+b,
        sortable:(filed,sort)=>{
            const sortType=filed==sort.column?sort.type:"default"
            const ions={
                default:"chevron-collapse-outline",
                asc:"chevron-up-outline",
                desc:"chevron-down-outline"
            }
            const types={
                default:"desc",
                asc:"asc",
                desc:"desc"
            }
            const ion=ions[sortType]
            const type=types[sortType]
            return `<a href="?_sort&column=${filed}&type=${sort.type=='asc'?'desc':'asc'}">
            <span class="icon-wrapper">
              <ion-icon name=${ion}></ion-icon>
            </span>
          </a>`;
        }

        
    }
}));
//set up middleware 
app.use(SortMiddlewares)
app.set('view engine', 'hbs');
const url_1="src\resources\views\home.hbs"
app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), 'resources','views'));
mongoose.set('strictQuery', true);
//setup to use post
app.use(express.urlencoded({
    extended:true
}))// process format  form data
app.use(express.json()) // process format json'
app.use(methodOveride('_method'))
//setup route
route(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});