import React from 'react';
import { useState } from 'react';
import Table from './Table';

export default function Data() {

 
const[list1,useList1]=useState([{name:"Ananthamoorthy",age:21,sex:"M",BloodGroup:"B-ve"},{name:"Rojin",age:36,sex:"M",BloodGroup:"O+ve"}]);

const get_data=(()=>{
  console.log(list1);
})

  return (
    <div>
          <Table p={list1}/>
    </div>
  )
}

