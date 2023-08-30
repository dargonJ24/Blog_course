import course from "../models/Course.js";
import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
class SiteService{
  search(keyword){
    return new Promise(async (resolve,reject)=>{
     try{
      //find base on keyword : 
      const allCourse = await course.find({ name: new RegExp(keyword, "i") });
      
      resolve({
       status:'OK',
       data: multipleMongooseToObject(allCourse)
      })
     }catch(e){
      reject({
        status:'err',
        message:e
      })
     }})
    
  }
    getAllCourse(){
        return new Promise(async (resolve,reject)=>{
            try{
             //const allUser = await User.find()
             const allCourse= await course.find()
             console.log(allCourse)
             resolve({
              status:'OK',
              data: multipleMongooseToObject(allCourse)
             })
            }catch(e){
              reject({
                status:'err',
                message:e
              })
            }
          })
    }
}
export default SiteService