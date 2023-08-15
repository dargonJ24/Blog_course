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
     //[POST] /courses/store
     store(req,res,next){
      const formdata =req.body
      formdata.image=`https://img.youtube.com/vi/${req.body.videoid}/default.jpg` //get thumnail youtube
      var newCourse = new course(formdata);
      newCourse.save()
  .then(savedCourse => {
    // Handle the successful save
    console.log("Course saved:", savedCourse);
    res.redirect("/")
  })
  .catch(error => {
    // Handle the error
    console.error("Error saving course:", error);
    res.status(500).send("Error saving course");
  });
    
    }
    //[GET] /courses/create
    create(req,res,next){
      res.render("courses/create")
    }
}
export default CourseController;