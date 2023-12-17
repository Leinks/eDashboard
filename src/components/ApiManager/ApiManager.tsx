import axios from 'axios';


const ApiManager = axios.create({
    baseURL:"http://localhost:8080/",
    headers:{
        "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});


export {ApiManager};