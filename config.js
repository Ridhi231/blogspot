export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'loading...',
        message:'data is being loaded,please wait'
    },
    success:{
        title:'success',
        message:'Data sucessfully loaded'
    },
    responseFailure:{
        title:'Error',
        message: 'Something went wrong. Please try again later.'
        //server error
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'

    },
    networkError:{
        title:'ERROR',
        message:'Network Error Occured!'
    }
}
//api service call
//Sample request
//need service call:{url:'/',method:post/get/...}
export const SERVICE_URLS={
    userSignup:{url:'/signup',method:'POST'}
                     //end point from route.js
} 