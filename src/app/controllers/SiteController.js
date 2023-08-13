import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js";
 
class  SitesController{
    //[GET] /
    index(req,res){
        course.find({})
  .then((courses) => {
    //courses =courses.map(courses=>courses.toObject()) //fix bug process object for handlebars
    res.render('home',{courses: multipleMongooseToObject(courses) })
  })
  .catch((err) => {
    res.status(400).json({ err: 'message' });
  });
        }
        //res.render("home")
    
    //[GET] /search
    search(req,res){
        res.render("search")

    }
}
export default SitesController;