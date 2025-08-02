import React from 'react'
import { useContext } from 'react';
import Ctx from './Ctx';

export default function C4() {
    const data=useContext(Ctx);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}
