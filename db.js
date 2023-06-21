
import mongoose from "mongoose";
//this will be used to make connection with database
 const connection=async(username,password)=>{
   // const URL='mongodb://${username}:${password}@ac-di05hwg-shard-00-00.ekrrtzz.mongodb.net:27017,ac-di05hwg-shard-00-01.ekrrtzz.mongodb.net:27017,ac-di05hwg-shard-00-02.ekrrtzz.mongodb.net:27017/?ssl=true&replicaSet=atlas-qblbqd-shard-0&authSource=admin&retryWrites=true&w=majority';
    const URL='mongodb://ridhianand:blogspot@ac-di05hwg-shard-00-00.ekrrtzz.mongodb.net:27017,ac-di05hwg-shard-00-01.ekrrtzz.mongodb.net:27017,ac-di05hwg-shard-00-02.ekrrtzz.mongodb.net:27017/?ssl=true&replicaSet=atlas-qblbqd-shard-0&authSource=admin&retryWrites=true&w=majority'
   try{
     await  mongoose.connect(URL,{useNewUrlParser:true}) 
     console.log('connection successfull');
    }
    catch(error){
        console.log('error is',error)

    }
}
export default connection;