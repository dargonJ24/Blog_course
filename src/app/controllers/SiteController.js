import course from "../models/Course.js";

class  SitesController{
    //[GET] /
    index(req,res){
        course.find({})
  .then((courses) => {
    res.json(courses);
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