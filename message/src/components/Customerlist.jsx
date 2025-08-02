import React, { useEffect, useState } from 'react'

function Contactdisplay({datalist}) {
    const [list1,setList1]=useState([{name:"sam",email:"sam@gmail.com",mobile:2536565},{name:"amal",email:"amal@gmail.com",mobile:727367676}]);
    useEffect(()=>{
         if (datalist && datalist.length > 0){
            setList1(datalist);    
         }
        
    },[datalist]);
    
  return (
   <table border="3" >
    <tr><td>SlNo</td><td>Name</td><td>Email</td><td>Mobile</td></tr>
    {
        list1.map((item,index)=>{
            return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
            </tr>
        })
    }
   </table>
  )
}

export default Contactdisplay