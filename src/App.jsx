import { useState } from 'react'
import './App.css'
import Login from "./Components/Login/Login"
import Sidebar from './Components/Sidebar/Sidebar';
import Home from "./Components/Home/Home";
function App() {
  const [count, setCount] = useState(0)
  const isUserLogedin = false;

  return (
    <>

      {isUserLogedin ? <Login /> : <Sidebar>

        <Home />
      </Sidebar>}

    </>
  )
}

export default App
