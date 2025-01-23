import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmpoloyeeDashboard from "./components/Dashboard/EmpoloyeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { use } from "react";
const App = () => {
 
  const [user , setUser] = React.useState(null)
  const data = useContext(AuthContext);

  useEffect(() => {
      if(data){
        const loggedInUser = localStorage.getItem("loggedInUser");
       
      }
  },[data])

  const handleLogin = (email,password) => {
    if(data && data.admin.find((ad) => ad.email == email && ad.password == password)){
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
    }
    else if(data && data.employees.find((emp) => emp.email == email && emp.password == password)){
      setUser('employee')
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee'}));
    }
    else{
      alert("Invalid Credentials")
    }
  }


  return ( 
    <>
    {!user ? <Login handleLogin={handleLogin}/> : null}
    {user == 'admin' ? <AdminDashboard/> : ''}
    {user == 'employee' ? <EmpoloyeeDashboard/> : ''}
    </>
   );
}
 
export default App;