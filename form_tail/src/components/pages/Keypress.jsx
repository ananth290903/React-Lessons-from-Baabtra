import React, { useState } from 'react'
export default function Keypress() {
    const[color1,setColor]=useState("");
    const[boolval,setBoolval]=useState(false);
    const Keyup=()=>
    {
        setBoolval((prev)=>{
            const NewColor=!prev;
            NewColor?setColor("blue"):setColor("Orange");
            return NewColor;
        })
    }

  return (
    <div>
      <button style={{backgroundColor:color1,color:"white"}} onKeyUp={Keyup}>Hello</button>
    </div>
  )
}
