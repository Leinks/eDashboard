import { GetsManager } from '../ApiManager/ApiManager';
import { DecryptData } from '../../utils/DecryptData';



export async function GetCompany () {
    const token = DecryptData(localStorage.getItem('Copilot')!) 
 
   // console.log('token',token)
    try {
        const response = await GetsManager( 'company/',
        {
          method: 'GET',
          headers:{
         // "Content-type" : "application/json",
         // "Authorization" : `Bearer ${token}`,
         "Content-type" : "Authorization",
         "Authorization" : `Bearer ${token}`,
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
