import { Navigate } from "react-router-dom"


interface AuthGuardProps{
    children: React.ReactNode
}

export default function AuthGuard({children}: AuthGuardProps) {
    // const isAuthenticated = sessionStorage.getItem('accessToken')
    const isAuthenticated = localStorage.getItem('Copilot')
    if(!isAuthenticated) {
      return <Navigate to='/'/>
    }else{
      return (
        <>{children}</>
      )
    }
   

}
