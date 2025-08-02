

import React from 'react'
import { useContext } from 'react'
import { MyContext } from './App'
export default function Count() {

    const x=useContext(MyContext);
  return (
    <div>
      <h1>{x}</h1>
    </div>
  )
}
