import newsRouter from "./news.js";
import SitesRouter from "./site.js";
import CourseRouter from "./course.js";
export function route(app) {
  app.use('/courses',CourseRouter)
    app.use('/news',newsRouter)
    app.use('/',SitesRouter)
   
  }