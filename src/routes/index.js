import newsRouter from "./news.js";
import SitesRouter from "./site.js";
import CourseRouter from "./course.js";
import meRouter from "./me.js";
export function route(app) {
  app.use('/me',meRouter)
  app.use('/courses',CourseRouter)
    app.use('/news',newsRouter)
    app.use('/',SitesRouter)
   
  }