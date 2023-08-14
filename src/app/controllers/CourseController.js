import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js";
 
class  CourseController{
  //[GET] /courses/{{this.slug}}
    show(req,res,next){
      course.findOne({slug:req.params.slug})
      .then(course=>{
       res.render("courses/show",{course :mongooseToObject(course)})
      }).catch(next)

    }
}
export default CourseController;