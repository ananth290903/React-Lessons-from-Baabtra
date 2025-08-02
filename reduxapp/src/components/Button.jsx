import React from 'react'
import { useState } from 'react'

export default function Button() {
    const[cnt,setCnt]=useState(0);
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={()=>setCnt(cnt+1)}>+</button>
      <button onClick={()=>setCnt(cnt-1)}>-</button>
      <button onClick={()=>setCnt(0)}>Reset</button>
    </div>
  )
}

