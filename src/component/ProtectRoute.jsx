import { Navigate } from "react-router-dom"
const ProtectRoute = ({children}) => {
    const token = JSON.parse(localStorage.getItem('login'));
    if(!token){
        return <Navigate to='/Form'/>
    }

 return children;
  
}

export default ProtectRoute
