import { useState } from "react";
import './Toggle.css';
function Toggle()
{
    const[toggle,setToggle]=useState(false);
    return(<>
     
     <button onClick={()=>useState(!toggle)}>Show text</button>
    
    </>)
}

export default Toggle