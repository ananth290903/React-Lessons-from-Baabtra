import { useState,useEffect } from 'react';
import './App.css'; // <-- we'll create this for plain CSS
import C1 from './components/C1';
import C2 from './components/C2';
import C3 from './components/C3';
import C4 from './components/C4';
import Ctx from './components/Ctx';

function App()
 {

 return (
   <div>
    <Ctx.Provider value="Helloooo">
    <h1>Hello World</h1>
    <C4></C4>
    </Ctx.Provider> 
   </div>
 );
}


export default App;






















  

   {/*  
    function App() {

  const[number,setNumber]=useState();
   function input()  
   {
     const x=prompt("Enter the number");
     setNumber(x);

   }

  return (
    <div>
      <Conddisplay option={x} />
    </div>
  )
}

export default App;
   *************************************************************************************************************************************8
      <h1 className="text-3xl font-bold underline text-blue-600 bg-yellow-200 p-4 m-8 rounded-lg">
      Hello world! Tailwind is working!
    </h1>
      <h1> My First Work</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolore! Saepe autem laudantium suscipit totam? Vero magnam tenetur deleniti et, est culpa obcaecati libero quis quidem repellendus, ratione dolorum repellat.</p>
       <img src="./public/chem.jpg" width="300px" height="300px"></img>
       <Sample/>
       
       <Counter /> */}