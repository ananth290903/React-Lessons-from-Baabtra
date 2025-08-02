import React, { useState } from 'react'
import './Counter.css';

export default function Counter() {
  const[counter,setCounter]=useState(0);
  
  return (
    <div class="mainb">
        <div class="mainb">
           <div class="line-1"></div>
           <div class="heading">COUNTER</div>
           <div class="count_value">{counter}</div>
           <div class="buttonpanel">
                <div class="butt-1" onClick={()=>setCounter(counter+1)}>+</div>
                <div class="butt-2" onClick={()=>setCounter(counter-1)}>-</div>
                <div class="butt-3" onClick={()=>setCounter(0)}>Reset</div>
            </div>
        <div class="line-2"></div>
  </div>
    </div>
  )
}

/*
<button onClick={()=>setCounter(counter+1)}> Increment</button>
           <button onClick={()=>setCounter(counter-1)}>Decrement</button>
           <button onClick={()=>setCounter(0)}>Clear</button>
*/