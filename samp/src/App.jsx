import { useEffect, useState } from 'react'
import Contactentry from './components/Contactentry';
import Contactdisplay from './components/Contactdisplay';
function App(p) {
  const [contactList,setContactlist]=useState([]);

  const setnewContact=(data)=>{
    setContactlist([...contactList,data]);
    
  }
  useEffect(()=>{
    console.log(contactList);
  },[contactList]);
  return (
    <>
    <table>
      <tr>
        <td><Contactentry f1={setnewContact}></Contactentry></td>
        <td><Contactdisplay datalist={contactList}></Contactdisplay></td>
      </tr>
 
    </table>
    </>
  )
}

export default App