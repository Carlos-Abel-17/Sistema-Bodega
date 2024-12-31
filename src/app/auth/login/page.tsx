'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import './styles.login.css';
import { useForm} from 'react-hook-form';

const loginPage = () => {
  const { login } = useAuth();
   const {register,handleSubmit}=useForm();

  const onSubmit = async (Data: any) => {
   console.log(Data);
   await login(Data)

  };

  return (
   
   
   <div  className=" login-container max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
            <input 
            type="email" 
            id="email" 
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="name@company.com" 
            required 
            />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input 
            type="password"  
            id="password" 
            placeholder="••••••••" 
            {...register("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            required 
            />
        </div>
        {/* <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input 
                    id="remember" 
                    type="checkbox" 
                    value="" 
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                    required 
                    />
                </div>
                <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>  
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div> */}
        <button 
        type="submit" 
        className="w-full text-white bg-colorVA hover:bg-hoveVA focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
   </div>

  );
};

export default loginPage;
