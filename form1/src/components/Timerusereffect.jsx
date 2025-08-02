import React from 'react';
import { useEffect } from 'react';
 export default function Timerusereffect() {

     useEffect(()=> {
         const timer=setInterval(()=>{
             console.log("Tick")
         },1000);


         /* 
          useEffect(()=>
          {const timer=setInterval(()=>{
            console.log("Tick")});
            },1000)


            useEffect(()=>{
              const timer=setInterval(()=>{
                })})
         
         */





   return ()=>
   {
     clearInterval(timer);
     console.log("Timer cleared");
   };

 },[]);

  return (
    <div>
      <h1>Check the console for the ticking log</h1>
    </div>
  )

 } 





