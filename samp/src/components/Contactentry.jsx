import React, { useEffect, useState } from 'react'


function Contactentry(p) {
    var [name,setName]=useState("");
    var [email,setEmail]=useState("");
    var [mobile,setMobile]=useState("");

    const getdata=()=>{
        p.f1({name:name,email:email,mobile:mobile});
    };
  
  return (
    <div>
       
        <table>
            <tr>
                <td><h4>Contact Entry</h4></td>
                
            </tr>
            <tr>
                <td><input type="text" id="txtName" onChange={(e)=>{setName(e.target.value);}} placeholder='Name'/></td>
            </tr>
            <tr>
                <td><input type="text" id="txtEmail" onChange={(e)=>{setEmail(e.target.value);}} placeholder='Email'/></td>
            </tr>
            <tr>
                <td><input type="text" id="txtMobile" onChange={(e)=>{setMobile(e.target.value);}} placeholder='Mobile'/></td>
            </tr>
            <tr>
                <td><input type="button" onClick={getdata} value="Enter"/></td>
            </tr>
        </table>
    </div>
  )
}

export default Contactentry