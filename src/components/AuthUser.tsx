import axios from 'axios'
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










export const AuthUser = async (data: any) => {
    const formdata = new FormData();
    formdata.append('email', data.email)
    formdata.append('password', data.password)
    const BodyContent = formdata
    //console.log(BodyContent)
    //console.log(data)
  
    try {
        const result = await ApiManager( 'login',
        {
            method: 'POST',
            headers:{
            "Content-type" : "application/json",
           // Accept: '*/*',
           credentials: 'same-origin'
        
                
        },
            data: BodyContent,
        });
        //console.log(result)
        return result;
    } catch (e: any) {
        console.info(e)
          //console.log(e.response)
        return e.response;
      }
    };


