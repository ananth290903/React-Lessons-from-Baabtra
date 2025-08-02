import React, { useState } from 'react'

export default function Business(p) {

    var[date,setDate]=useState('');
    var[item,setItem]=useState('')
    var[quantity,setQuantity]=useState(0);
    var[price,setPrice]=useState(0);

   {/*
       console.log(date);cd
    console.log(item);
    console.log(quantity);
    console.log(price);
    */}

    const getData=(()=>{
        p.f1({item:item,date:date,quantity:quantity,price:price});
    })


  return (
    <div>
    <h2>Purchase List</h2>
     <table border="1">
        <tbody>
        <tr>
             <td><input type="text" placeholder="Item" onChange={(e)=>setItem(e.target.value)}/></td>
        </tr>
        <tr>
             <td><input type="date" placeholder="Date" onChange={(e)=>setDate(e.target.value)} /></td>
        </tr>

          <tr>
              <td><input type="number" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)}/></td>
        </tr>
          <tr>
            <td> <input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/></td>
        </tr>
        </tbody>
     </table>
      <button onClick={getData}>Add transac.</button>
    </div>
  )
}
