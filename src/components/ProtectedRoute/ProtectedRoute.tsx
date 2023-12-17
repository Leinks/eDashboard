import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (
    {canActivate}: {canActivate:boolean},
    {redirectPath = '/'}: {redirectPath:string}
     ) => {
    if(canActivate) {
      return <Navigate to={redirectPath} replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute