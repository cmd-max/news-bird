import { useState } from "react";
import Navbar from "./Components/Navbar";
import {New_Board}  from "./Components/New_Board";


 const App = () => {
  const[category,setCategory] = useState("general")
  return (
    <div>
    <Navbar setCategory={setCategory}/>
    <New_Board Category={category}/>
  
    </div>
  )
}

export default App;