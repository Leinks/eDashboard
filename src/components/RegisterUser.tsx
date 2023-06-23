import { ApiManager } from './ApiManager';


export const RegisterUser = async (data: {name:string,email:string,password:string}) => {

    const formdata = new FormData();
    formdata.append('name', data.name)
    formdata.append('email', data.email)
    formdata.append('password', data.password)
    //formdata.append('passwordConfirmation', data.passwordConfirmation)
    const BodyContent = formdata
    //console.log(data)
  
    try {
        const result = await ApiManager( 'register',
        {
            method: 'POST',
            headers:{
            "Content-type" : "application/json",
            Accept: '*',        
                
        },
            data: BodyContent,
        });
        if(result){

          console.log(result)
        
          return 0;
        }
    } catch (e: any) {
          console.info(e)
          //console.log(e.response.data.error)
        return 1;
      }
    };


