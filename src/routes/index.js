import newsRouter from "./news.js";
import SitesRouter from "./site.js";
import CourseRouter from "./course.js";
export function route(app) {
  app.use('/course',CourseRouter)
    app.use('/news',newsRouter)
    app.use('/',SitesRouter)
   
  }