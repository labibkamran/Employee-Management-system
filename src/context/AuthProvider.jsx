import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setuserData] = React.useState(null);
    console.log(userData)
    React.useEffect(() => {
        const data = getLocalStorage();
        setuserData(data);   
    }, [])
    
  return (
    <AuthContext.Provider value= {userData}>
         <div>{children}</div>
    </AuthContext.Provider>  
  )
}

export default AuthProvider