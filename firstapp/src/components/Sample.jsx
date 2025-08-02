import React from 'react'
import './Sample.css';

export default function Sample() {

  return (

    
    <div>
    <div className='main' style={{display:"flex",justifyContent:"center"} }>
        <div class="card">
    <img src="src/assets/ooty.jpg" width="280px" height="180px"></img>
  <h1>OOTY</h1>
  <p>The Switzerland of South India</p>
   <div class="button1">Visit</div>
</div>

<div class="card">
     <img src="src/assets/blore.jpg" width="280px" height="180px"></img>
  <h1>BANGALORE</h1>
  <p>The Garden City of India</p>
  <div class="button1">Visit</div>
</div>

<div class="card">
     <img src="src/assets/mysore.jpeg" width="280px" height="180px"></img>
  <h1>MYSORE</h1>
  <p>The City of Lights</p>
  <div class="button1">Visit</div>
</div>
</div>  
    </div>
  )
}
