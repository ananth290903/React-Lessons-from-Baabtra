import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function APIFetch() {
        const[datalist,setDatalist]=useState([]);
        const[fields,setFields]=useState([]);

       useEffect(()=>{
        console.log("The fields added are");
        console.log(fields);
       },[fields])
       
       

        useEffect(()=>
        {
           axios.get('https://jsonplaceholder.typicode.com/posts')
           .then((response)=>{
             if(response.data[0] && response.data.length>0)
            {
                setFields(Object.keys(response.data[0]));
                setDatalist(response.data);
            }})

             .catch((error)=>{
                console.log("Couldnt fetch the information")
              })

        },[])

  return (
    <div>
        <table border="2">
        <thead>
               
                 <tr>
                {
                  fields.map((field,id)=>( 

                        <td key={id}>{fields[index]}</td>
                
                    
                  ))

                }
                </tr>
        </thead>

        <tbody>
            {
                datalist.map((data,index)=>(
                  <tr key={index}>
                    {
                      fields.map((field,idx)=>
                      (
                         <td key={idx}>{data[field]}</td>
                      )

                      )
                    }

                  </tr>
                   
                )
              )
            }
         
        </tbody>
        </table>
    </div>
  ) 
}
