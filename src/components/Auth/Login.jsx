import { useState } from "react"
import React  from 'react'

const 
Login = ({handleLogin}) => {

    const [email, setemail] = useState('');
    const [pasword, setpasword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,pasword);
        setemail('');
        setpasword('');
    }
  return (
    <div className='flex h-screen w-screen  items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e) =>{
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={
                    (e) => {
                        setemail(e.target.value)
                    }
                }
                required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'/>
                <input 
                value={pasword}
                onChange={
                    (e) => {
                        setpasword(e.target.value)
                    }
                }
                required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 mt-3 rounded-full placeholder:text-gray-400' type='password' placeholder='Enter your password'/>
                <button className='text-white outline-none border-none bg-emerald-600 text-xl py-4 px-5 mt-3 rounded-full'>Log in</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login;