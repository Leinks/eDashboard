
import { ApiManager } from '../ApiManager/ApiManager';

export const AuthUser = async (data: {email:string,password:string}) => {

    const formdata = new FormData();
    const BodyContent = formdata
  
    formdata.append('username', data.email)
    formdata.append('password', data.password)

    try {
        const result = await ApiManager( 'auth/login',
        {
          method: 'POST',
          headers:{
          "Content-type" : "application/json",
          Accept: '*',  
                     
        },
            data: BodyContent,
        });
        if(result.status === 200){

          sessionStorage.setItem('access_token',result.data.access_token)
          sessionStorage.setItem('name' , result.data.name)
          sessionStorage.setItem('email', result.data.email)

          // localStorage.setItem('access_token',result.data.access_token)
          // localStorage.setItem('name', result.data.name)
          // localStorage.setItem('email', result.data.email)

          // console.log(result.data.access_token)
          // console.log(result.status)
          // console.log(result.data)
        
          return 0;
        }
        return 1;
    } catch (e: any) {
          //console.info(e)
         // console.log(e.response.data.error)
        return 1;
      }
    };


