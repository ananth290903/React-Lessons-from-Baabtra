import React, { useEffect, useState } from 'react'
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses'
import { useSelector,useDispatch } from 'react-redux'

function C1() {
  const [s,setS]=useState();
  const disp=useDispatch();
  const data=useSelector((data)=>{
    return data;
  });
  useEffect(()=>{
    setS(data);
  },[data])
  const changeData=()=>{
    disp({type:"update",value:101});
  }
  return (
    <div>
      <h1>First Component</h1>
      <p>{s}</p>
      <input type="button" value="Ok" onClick={changeData}/>
    </div>
  )
}

export default C1