import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ApiManager } from './ApiManager';



// export default function AuthUser() {
//     const http = axios.create({
//         baseURL:"http://localhost:8000/api/",
//         headers:{
//             'Access-Control-Allow-Origin': '*',
//             Accept: '*/*',
//         }
//     });
//     return {
//         http,
        
//     }
// }










export const AuthUser = async (data: {email:string,password:string}) => {
    // const [token, setToken] = useState();
    // const [user, setUSer] = useState();
    const formdata = new FormData();
    const BodyContent = formdata
    // const navigate = useNavigate();
    formdata.append('email', data.email)
    formdata.append('password', data.password)

    // const saveToken = (user,token) =>{
    //   sessionStorage.setItem('token', JSON.stringify(token))
    //   sessionStorage.setItem('user', JSON.stringify(user))

    //   setToken(token);
    //   setUSer(user);
    //   //
    // }
    //console.log(BodyContent)
    //console.log(data)
  
    try {
        const result = await ApiManager( 'login',
        {
            method: 'POST',
            headers:{
            "Content-type" : "application/json",
            Accept: '*',
            //credentials: 'same-origin'
        
                
        },
            data: BodyContent,
        });
        if(result.data.access_token){
          // sessionStorage.setItem('token',result.data.access_token)
          // sessionStorage.setItem('user', result.data.user)
          // setToken(result.data.access_token);
          // setUSer(result.data.user);
          console.log(result.data.user)
        
          return 0;
        }
    } catch (e: any) {
          //console.info(e)
          console.log(e.response.data.error)
        return 1;
      }
    };


