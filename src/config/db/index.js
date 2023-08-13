import mongoose from "mongoose";
export async function dbconnect(){
   try{
      console.log("connecting..")
     mongoose.connect('mongodb://localhost:27017/f8_course')
    .then(() => console.log('Connected!'));

   }catch(error){
      console.log('Connect failure')
   }
}
