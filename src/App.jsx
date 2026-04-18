import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
function App() {
 
  const[userdata,setuserdata]=useState("");

  useEffect(
    function (){
      const data={
        name:"shiyana",
        address:"manglore",
        language:"english ,hindi"
        
      }
      setuserdata(data)
    }
    
    ,[])

  return (
   <div>
    <h1>
      home page
    </h1>
    <p>{userdata.name}</p>
    <p>{userdata.address}</p>
    <p>{userdata.languages}</p>

   </div> 
  )
}
return (
  function App() {
  return (
    <div style={{ backgroundColor: "red", color: "blaqck", minHeight: "100vh" }}>
      <h1>Home page</h1>
    </div>
  )
}
export default App;

