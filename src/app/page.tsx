'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";


export default function Home() {
 
  const router = useRouter();

  useEffect(()=>{
   const token = Cookies.get('token')
   if(token){
   console.log( 'si es token ' + token)
    router.push("/Dashboard")   
   }else{
    router.push("/auth/login")
   }

  },[router])
  


  return (
    <div>
      <h1> page principal </h1>
    </div>
  );
}
