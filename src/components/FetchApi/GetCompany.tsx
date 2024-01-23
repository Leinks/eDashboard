import { GetManager } from '../ApiManager/ApiManager';
// import React from "react";

export async function GetCompany () {
   // const [Company, setCompany] = React.useState(null);
    
   // console.log('token',token)
    try {
        const response = await GetManager( 'company/',
        {
          method: 'GET',
          headers:{
          "Content-type" : "application/json",
         // "Authorization" : `Bearer ${token}`,
          Accept: '*',          
        }
    // })
    //     setCompany(response.data)
    //     console.log('Company',Company)

        })
        return response

    } catch (error) {
        console.log('error-Company',error)
    }
}
