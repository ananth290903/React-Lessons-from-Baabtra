import Business from './components/Business';
import Businesslist from './components/Businesslist';
import { useState,useEffect } from 'react';
function App()
{
  const[orderlist,setOrderlist] =useState([])

  const setnewdataitem=((data)=>{

      setOrderlist([...orderlist,data])
  })

  useEffect(()=>{
    console.log(orderlist)
  },[orderlist])



  return(<>  
  <Business f1={setnewdataitem}/>  
  <Businesslist datalist={orderlist}/>
  </>);
}

export default App 






















































































{/*
  
  import React from 'react'

export default function Errormessage() {
  return (
    <div>
      <h1>WRONG OPERATION</h1>
      <p>Exited from the Application</p>
    </div>
  )
}

***************************888

function Successmessage()
{
   return(
    <>
    <h1>Sucess Message</h1>
    <p>successfully Performed the execution of Code</p>
    </>
   )

}

export default Successmessage

******************************************************

function Warningmessage()
{
    return(<>
    <h1>Warning Message</h1>
    <p>Potential Risks in Running the code</p>
    </>)
}

export default Warningmessage;

  
  
  
  
  
  
  
  
  
  
  */}

