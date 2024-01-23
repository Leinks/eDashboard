import axios from 'axios';

  const token = sessionStorage.getItem('accessToken')
 //const token = JSON.parse(sessionStorage.getItem('accessToken') || '{}');
 //console.log('Token',token)
const AuthManager = axios.create({
    baseURL:"http://localhost:8080/",
    headers:{
        "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});
const GetManager = axios.create({
    baseURL:"http://localhost:8080/",
    headers:{
        "Content-type" : "Authorization",
        "Authorization" : `Bearer ${token}`
    }
});


export {AuthManager, GetManager};