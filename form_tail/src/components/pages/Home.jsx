import React from 'react';
import {Route,Router,Link} from 'react-router-dom';
import './Home.css';
function Home()
{  
   return(
    <div class="temp">
    <ul>
      <li><Link to="/services/" style={{}}>Services</Link></li>
      <li><Link to="/about" style={{}}>About</Link></li>
      <li><Link to="/" style={{}}>Home</Link></li>
   </ul>
    </div>
   )
};



export default Home;

