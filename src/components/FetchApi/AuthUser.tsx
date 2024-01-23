
import { AuthManager } from '../ApiManager/ApiManager';

export async function AuthUser(data: {email:string,password:string}){

    const formdata = new FormData();
    const BodyContent = formdata
  
    formdata.append('username', data.email)
    formdata.append('password', data.password)

    try {
        const response = await AuthManager( 'auth/login',
        {
          method: 'POST',
          headers:{
          "Content-type" : "application/json",
          Accept: '*',  
                     
        },
            data: BodyContent,
        });
        if(response.status === 200){

          sessionStorage.setItem('accessToken',response.data.accessToken)
          sessionStorage.setItem('name' , response.data.name)
          sessionStorage.setItem('email', response.data.email)
          
          // localStorage.setItem('accessToken',response.data.accessToken)
          // localStorage.setItem('name', response.data.name)
          // localStorage.setItem('email', response.data.email)

          // console.log('Data',response.data.accessToken)
          // console.log(response.status)
          // console.log(response.data)
        
          return 0;
        }
        return 1;
    } catch (e: any) {
          //console.info(e)
         // console.log(e.response.data.error)
        return 1;
      }
    };


