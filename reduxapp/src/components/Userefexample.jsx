import { useRef,useState,useEffect } from "react";
import React from 'react'

export default function Userefexample() {
    const[inputValue,setInputValue]=useState("");
    const previousInputvalue=useRef("");

    useEffect(()=>
       { previousInputvalue.current=inputValue},[inputValue])


  return (
  <>
   <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
   <h2>The current Value:{inputValue} </h2>
   <h2>The Previous value:{previousInputvalue.current}</h2>
 </>

)}

/* 


import React from 'react'
import { useRef,useState,useEffect } from 'react';

export default function Userefexample() {
   const[inputValue,setInputValue]=useState("");
   const count=useRef(0);
   
   useEffect(()=>
    {count.current=count.current+1});

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Render Count:{count.current}</h1>
    </div>
  )
}
*/