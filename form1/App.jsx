import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // <-- Add this line to main. Jsx
import Timerusereffect from './components/Timerusereffect.jsx'
import APIFetch from './components/APIFetch.jsx';

function App() {

  return (
    <>  
    



    {/* 
         <div id="root" class="w-[240px] h-[20px] rounded-[5px] bg-gray-80">
      /* 
    <form >
      <label for="Firstname" class="">First Name:</label>
       <input type="text" id="Firstname" class="FirstName"></input>
      <br/>
       <label for="LastName">Last Name</label>
       <input type="text" id="Lastname"></input>
       <br/>
       <label for="number" id="number">Phone Number</label>
       <input type="text"></input>
          <br/>
       <label for="email" id="email">Email</label>
       <input type="email" id="email"></input>
      </form> 
      <label for="Profession">Profession</label>
      <select type="Profession" placeholder="Enter Profession">
        <option value="">--Enter your Profession--</option>
        <option value="Govt Employee">Government Employee</option>
        <option value="Private Employee">Private Employee</option>
        <option value="Retired">Retired</option>
        <option value="Unemployed">Presently Unemployed</option>
        <option value="Student">Student</option>
      </select>
      <br/>
      <label for="Address">Address</label>
      <textarea id="Address" rows="5" cols="30" placeholder="Address"></textarea>  </div>
    

    */}

    <Timerusereffect/>
     <APIFetch/>

    </>
  )
 }

export default App

