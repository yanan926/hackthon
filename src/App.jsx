import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import Resultpage from "./pages/resultpage";


function App() {

  const [person, setPerson] = useState({})
  const [userUrl, setUserUrl] = useState({})
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage setPerson={setPerson} setUserUrl={setUserUrl}/>}/>
      <Route path='/result' element={<Resultpage person={person} userUrl={userUrl}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
