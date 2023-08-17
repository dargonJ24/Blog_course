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
        course.find({
            }).
        then(course=>res.render("me/storeCourse",
       { course: multipleMongooseToObject(course)}
        )).
        catch(next)

        
    }
    //
    index(req,res){
        res.send("hello you")
    }
}
export default MeController;