
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './component/Form'
import ProductCard from './component/ProductCard'
import Navbar from './component/Navbar'
import Card2 from './component/Card2'
import { useState, useEffect } from 'react'
import Fetchapi from './component/Fetchapi'
import Foter from './component/Foter'
import DefaulPage from './component/DefaulPage'



function App() {

  const [mode, setMode] = useState("light");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");



  const colorMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      let heading = document.getElementById("main-heading");
      heading.style.backgroundColor = "black";
      heading.style.color = "white";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let heading = document.getElementById("main-heading");
      heading.style.backgroundColor = "white";
      heading.style.color = "black";
      setMode("light")
    }
  }

  const logOut = () => {
    localStorage.removeItem("login");
    setLogin(false)

  }
  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("login"));
    if (localdata) {
      setLogin(true);
    }
  }, []);
  return (

    <>
      {
        login === false ?
          <Form setLogin={setLogin} error={error} setError={setError} /> :
          <div>
            <Routes>
              <Route path='*' element={<DefaulPage/>}/>
              <Route path='/' element={< ProductCard mode={mode} error={error}  colorMode={colorMode} logOut={logOut}  />} />
              <Route path='/cart' element={<Card2 title="React vite" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6EAHvdbel54bf0pizpGJS2ZkDVfkcoEpuQ&s"} mode={mode} colorMode={colorMode} logOut={logOut}  />} />
              <Route path='/about' element={<Fetchapi mode={mode} colorMode={colorMode} logOut={logOut} />} />
            </Routes>
          </div>
      }

    </>
  )
}

export default App
