import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js";

class  CourseController{
  //[POST] /handle-form-action
  handleFormAction(req,res,next){
   
    
    switch(req.body.action){
      case "delete":
        course.delete({_id : {$in:req.body.coursIds}}).
        then(res.redirect("back")).
        catch(next)
        break
      default:
        res.json({mesage:'Action is invalid'})
    }
    
  }
  //[DELETE] /:id/fore
  foredelete(req,res,next){
    course.deleteOne({_id : req.params.id}).
    then(res.redirect("back")).
    catch(next)
  }
  //[PATCH] /:id/restore
  restore(req,res,next){
    course.restore({_id : req.params.id}).
    then(res.redirect("/me/courses/store")).
    catch(next)
    
    
  }
  //[DELETE]/courses/:id
     delete(req,res,next){
      course.delete({_id : req.params.id}).
      then(res.redirect("back")).
      catch(next)
     }
    //[PUT]/courses/:id
    update(req,res,next){
      
      course.updateOne({_id : req.params.id},req.body).
      then(  res.redirect("/me/courses/store")

      )
      .catch(next)
     
      
    
      
  }
    //[GET]/courses/:id/edit
    edit(req,res,next){
      course.findById(req.params.id).
      then(course=>res.render("courses/update",{
        course:mongooseToObject(course)
      })).
      catch(next);
      
  }
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
          newCourse.save().then(savedCourse => {
          // Handle the successful save
          console.log("Course saved:", savedCourse);
          res.redirect("/me/courses/store")
        })
        .catch(error => {
          // Handle the error
          console.error("Error saving course:", error);
          res.status(500).send("Error saving course");
        });

        
      }catch(error){

      }

     
      
      
      
  
    
    
    //[GET] /courses/create
    create(req,res,next){
      res.render("courses/create")
    }
}
export default CourseController;