//USER APIS
import User from '../model/schema.js'
export const signupUser=async(request,response)=>{
    try{
const user= request.body;
const newUser=new User(user);//validation
await newUser.save()
//asynscrous request ---awiat l
return response.status(200).json({msg:'signup successfull'})
    }
    catch(error){
        return response.status(500).json({msg:'Error while signup'})
        //server error

    }

}
//request- fields from frontend
//response- backend to frontend
//exceptional handling- using try catch
//since we are working with cloud mong there might be some error