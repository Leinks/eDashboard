import axios from 'axios';

//   const token = sessionStorage.getItem('accessToken')
const token = localStorage.getItem('Copilot')
  
 //const token = JSON.parse(sessionStorage.getItem('accessToken') || '{}');
 //console.log('Token',token)
const AuthManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});
const GetManager = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers:{
        "Content-type" : "Authorization",
        "Authorization" : `Bearer ${token}`
    }
});


export {AuthManager, GetManager};