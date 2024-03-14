import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import NavBar from './Components/navBar/NavBar'
import Contacto from './Pages/contacto/Contacto'

function App() {


  return (
    <>
    <NavBar />
     <Routes>
      <Route path ="/" element={<Home />}> </Route>
      <Route path="/contacto" element={<Contacto />}> </Route>
     </Routes>
    </>
  )
}

export default App
