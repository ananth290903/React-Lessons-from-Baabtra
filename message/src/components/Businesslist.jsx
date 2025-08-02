import React, { useState,useEffect } from 'react'

export default function Businesslist({datalist}) {
  const[list1,setList1]=useState([{item:"Soap",date:"2025-07-21",quantity:4,price:580} , {item:"Bread",date:"2025-07-22",quantity:9,price:700}])
  
useEffect(()=>
    {
       if(datalist && datalist.length>0)
       {
          setList1(datalist);
       }
    },[datalist])

  return (
    <div>
      <table>
          <tr><td>Item</td>
               <td>Date</td>
               <td>Quantity</td>
               <td>Price</td>
          </tr>


         { list1.map 
            ((entity,index)=>( 
              <tr key={index}>
                <td>{entity.item}</td>
                <td>{entity.date}</td>
                <td>{entity.quantity}</td>
                <td>{entity.price}</td>
              </tr>
          ))}
  


      </table>
      
    </div>
  )


}
