import axios from 'axios'
import React from 'react'

export default function AuthUser() {
    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json",
            // "Authorization" : `Bearer ${token}`
        }
    });
    return {

        
        http,
   
        
    }
}

