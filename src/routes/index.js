import newsRouter from "./news.js";
import SitesRouter from "./site.js";
export function route(app) {
    app.use('/news',newsRouter)
    app.use('/',SitesRouter)
   
  }