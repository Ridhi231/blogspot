//condition toggling
import { useState } from 'react';
import { Box,TextField,Button,styled } from '@mui/material';

import { API }  from '../../service/api';
//will use styled component for handling css
//component styled with box
const Component= styled(Box)`
 width:450px;
 margin:auto;
 box-shadow:5px 2px 5px 2px rgb(0 0 0.6/ 0.6);
 `
 const Image=styled('img')({
    width:150,
    margin:'auto',
    display:'flex',
    padding: '50px 0 0'
 })
//will align in one line
 const Wrapper = styled(Box)`
 padding: 25px 35px;
 display:flex;
 flex:1;
 flex-direction:column;
 & > div, & > button,& >p{
    margin-top:20px
 }
 `
 const LoginButton=styled(Button)`
   text-transform:none;
   background:black;
   height=45px;`

const SignupButton=styled(Button)`
text-transform:none;
background:grey;
color: black;  
height=46px;
box-shadow:0 2px 4px rgb(0 0 0 /20%)
`
//for storing the extracted value in a class
const signupInitialValues={
   name:'',
   username:'',
   password:'',

}
const Login = () => {
    const [account,toggleAccount]=useState('login');
    const togglesignup=()=>{
        account==='signup'?toggleAccount('login'):toggleAccount('signup');
        
    }
    const[signup,setSignup]=useState(signupInitialValues);
    //for extracting the values from field
const onInputChange=(e)=>{
    setSignup({...signup ,[e.target.name]:e.target.value});
}
const [error,setError]=useState('');
//ab ek api hit krwani pdegi value store krwane ke liye
const signupUser= async()=>{
   let response=await API.userSignup(signup);
   if(response.isSuccess){
      setError('');
      setSignup(signupInitialValues);
      toggleAccount('login')
   }
   else{
      setError('Something went wrong! try again later');
   }
}
    return(
       <Component>
       <Box>
        <Image src="/images/blog.png" alt="login"/>
        {account==='login'?
        <Wrapper>
        <TextField variant='standard' label="Enter username"/>
        <TextField variant='standard' label="Enter password"/>
        
        <LoginButton variant='contained'>Login</LoginButton>
        <p align="center">OR</p>
        <SignupButton onClick={()=>togglesignup()}>Create an account</SignupButton>
        </Wrapper>
        :
        <Wrapper>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='name'label="Enter Name"/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username'label="Enter username "/>
        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='password'label="Enter password"/>
                    
        <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
        <p align="center">OR</p>
        <LoginButton variant="contained" onClick={()=>togglesignup()}>Already have an account</LoginButton>
        </Wrapper>}
        </Box>
       </Component>
        
    )
    //api hit onclick -signupUser se
}
//for using this component we will need 
//to export this
export default Login;