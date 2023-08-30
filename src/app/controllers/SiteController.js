import { mongooseToObject, multipleMongooseToObject } from "../../until/mongoose.js";
import course from "../models/Course.js";
import SiteService from "../service/SiteService.js";
const siteService=new SiteService()
class  SitesController{
    
     // test controller
     test(req,res){
      res.send("123")
     }
    // [GET] login 
    login(req,res){
      res.render("other/login")
    }
     
    //[GET]
    index(req,res) {
      siteService.getAllCourse()
  .then(response => {
    if (response.status === 'OK') {
      // Process the data
     
      res.render('home',{courses: response.data})
    } else {
      
      console.error(response.message);
    }
  })
  .catch(error => {
   
    console.error(error);
  });
    }
   
    
    //[GET] /search
    search(req,res){
        res.render("search")

    }
    //[POST] /search
    
    filter_course(req,res) {
      siteService.search(req.params.slug)
  .then(response => {
    if (response.status === 'OK') {
     
     console.log(response.data)
      res.render('home',{courses: response.data})
    } else {
      
      console.error(response.message);
    }
  })
  .catch(error => {
   
    console.error(error);
  });
    }
}

export default SitesController;