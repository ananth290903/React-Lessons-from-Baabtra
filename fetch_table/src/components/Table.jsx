import { useState } from "react";
import { useEffect } from "react";
import Data from './Data.jsx';


export default function Table({p}) {
    const[uselist,setUselist]=useState([]);
 
    useEffect(()=>{
      if(p && p.length>0)
      {
        setUselist(p);
      }
    },[p])

  return (
    <div>
        <table border="1">
         <tr>
          <td>Sl No.</td>
          <td>Name</td>
          <td>Age</td>
          <td>Sex</td>
          <td>Blood Group</td>
         </tr>

           {
          uselist.map((data,index)=>
          (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.sex}</td>
              <td>{data.BloodGroup}</td>
            </tr>
          ))
        }

        </table>
      
    </div>
  )
}
