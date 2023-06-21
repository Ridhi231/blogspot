//this will validate the data coming from frontend
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique: true //it should be unique
    },
    password:{
        type:String,
        required:true
    }


})
//jis db ke sath validate krna hai
const user= mongoose.model('user',userSchema);
export default user;