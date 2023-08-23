import mongoose from "mongoose";
var username="iamdog"
var pass="gaugaugau"
var url_connect=`mongodb+srv://${username}:${pass}@cluster0.yl93qop.mongodb.net/?retryWrites=true&w=majority`
export async function dbconnect(){
   try{
      console.log("connecting..")
     mongoose.connect(url_connect)
    .then(() => console.log('Connected!'));

   }catch(error){
      console.log('Connect failure')
   }
}
