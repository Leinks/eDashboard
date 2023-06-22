import axios from 'axios';


const ApiManager = axios.create({
    baseURL:"http://localhost:8000/api",
    headers:{
        "Content-type" : "Authorization",
        // "Authorization" : `Bearer ${token}`
    }
});

// const TicketManager = axios.create({
//   baseURL: 'http://164.92.87.191/api/',
//   responseType: 'json',
//   withCredentials: true,
// });

export {ApiManager};