import axios from 'axios';
import { useState,useEffect } from 'react';


function APIFetch()
{
  
   const[data,setData]=useState([]);
   const[fields,setFields]=useState([]);

   useEffect(()=>
   {
      axios.get('https://jsonplaceholder.typicode.com/posts')   
      .then((response) =>
        {  
           console.log("Fetched Data"+response.data);
           const extractedFields=response.data[0] && Object.keys(response.data[0]);
           
           if(extractedFields)
           {
              setFields(extractedFields);
              setData(response.data);
           }
        }

      )


      .catch((error)=>
          {
             console.log("Error Fetching Data"+error);
          }
      )
       
    
    
  },[]);




   return(
    <div>

    <table border="1">
      <thead>
        <tr>
         {fields.map((field,index)=>
        (
          <th key={index}>{field}</th>
         )
        )}
        </tr>
      </thead>

      <tbody>
       {data.map((record,index) =>(
      
         <tr key={index}>
            {fields.map((field,fieldIndex)=>
            (
                <td key={fieldIndex}>{record[field]}</td>

            ))}
         </tr>

       ))
       }

      </tbody>


     </table>


    </div>
   )
}

export default APIFetch;
  

{/*  

import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function APIFetch() {
   const[data,setData]=useState([]);
   const[fields,setFields]=useState([]);
   useEffect(()=> {

    axios.get('https://jsonplaceholder.typicode.com/posts')

    .then((response) => {
       console.log('Fetched Data',response.data);
       const extractedFields=response.data[0] && Object.keys(response.data[0]);
    
       if(extractedFields)
       {
         setFields(extractedFields);
         setData(response.data);
       }

       for(let field of extractedFields)
       {
         console.log(field);
       }


    })


     .catch((error) => {
        console.error("Error Fetching data:",error);
     });


   },[]);




   return(
    <div>
      {data.length>0 && 
        <table border="1"> 
          <thead>
           <tr>

   

           </tr>
          </thead>


        </table>
    
      
      
      
      }






    </div>



   )


 */}









   /*

  return (
    <div>
      <h1>Hello Dears!!!</h1>
      {data.length>0 && 
      <table border="1">
            <thead>
                <tr>
              {fields.map((field,index)=> 
              {
                <th key={index}>{field}</th>
              }   
                      
            )}
            </tr>
        </thead>
        <tbody>
            {data.map((record,index)=>(
             <tr key={index}>
                 { (field)

                 }

             </tr>

            )
            
            
            )}




        </tbody>


        </table>}
    </div>
  )*/



/*

function APIFetch()
{
    
    useEffect(()=>{
      axios.get()})


      .then((response)=>

}




*/
