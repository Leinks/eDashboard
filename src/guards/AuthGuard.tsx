import { Navigate } from "react-router-dom"


interface AuthGuardProps{
    children: React.ReactNode
}

export default function AuthGuard({children}: AuthGuardProps) {
    const isAuthenticated = sessionStorage.getItem('access_token')
    if(!isAuthenticated) {
      return <Navigate to='/'/>
    }else{
      return (
        <>{children}</>
      )
    }
   

}
