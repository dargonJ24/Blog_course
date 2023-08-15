import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js"
class  MeController{
  
    //[GET]/me/course/store
    storeCourse(req,res,next){
        course.find({}).
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