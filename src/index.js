import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { engine } from 'express-handlebars';
import path from 'path';
import { route } from "./routes/index.js";
import { dbconnect } from "./config/db/index.js";
import mongoose from "mongoose";
import methodOverride from "method-override"
import SortMiddlewares from "./app/SortMiddlewares/SortMiddlewares.js";

const app = express();
const port = 3000;

// Connect to MongoDB
dbconnect()
// Set up static file serving
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), './public')));

// Set up Handlebars engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : "default";
      const icons = {
        default: "chevron-collapse-outline",
        asc: "chevron-up-outline",
        desc: "chevron-down-outline"
      };
      const types = {
        default: "desc",
        asc: "asc",
        desc: "desc"
      };
      const icon = icons[sortType];
      const type = types[sortType];
      return `<a href="?_sort&column=${field}&type=${sort.type === 'asc' ? 'desc' : 'asc'}">
        <span class="icon-wrapper">
          <ion-icon name=${icon}></ion-icon>
        </span>
      </a>`;
    }
  }
}));

// Set up middleware 
app.use(SortMiddlewares);

// Set view engine and directory
app.set('view engine', 'hbs');
app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), 'resources', 'views'));

// Setup body parsing and method override
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Setup routes
route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});