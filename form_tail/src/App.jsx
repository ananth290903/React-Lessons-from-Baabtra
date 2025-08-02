import './App.css'
import Form from './components/Form';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Keypress from './components/pages/Keypress';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
   return(
      <Keypress/>

       
 
   )
}

export default App


{/* 
   
     <Routes> 
           <BrowserRouter>
         <Route path="/" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>  
         <Route path="/Services" element={<Services/>}/>
      </Routes>
      
      </BrowserRouter>
   
   
   
   
   
   */}

