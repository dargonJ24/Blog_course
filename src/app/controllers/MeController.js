import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js"
class  MeController{
     //[GET] /me/trash/course
     TrashCourse(req,res,next){
        course.findWithDeleted({ deleted: true }).
        then(course=>res.render("me/trashcourse",
           {      course: multipleMongooseToObject(course)}
        )).
    catch(next)

     }
    //[GET]/me/course/store
    storeCourse(req,res,next){
        Promise.all([course.find({}),course.countDocumentsDeleted({})]).
        then(([course,deletedcount])=>{
            res.render("me/storeCourse",
            { course: multipleMongooseToObject(course),deletedcount}
             )
        }).catch(next)
        
        
    }
    //
    index(req,res){
        res.send("hello you")
    }
}
export default MeController;