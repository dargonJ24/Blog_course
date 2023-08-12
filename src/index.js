import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const port = 3000;
//seup static
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), './public')))
//set up handlebar
app.engine('hbs', engine({
    extname:'.hbs'
}));

app.set('view engine', 'hbs');
const url_1="src\resources\views\home.hbs"
app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), './resources/views'));
console.log(path.join(dirname(fileURLToPath(import.meta.url)), './resources/views'))
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news',(req,res)=>{
    res.render("news")
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});