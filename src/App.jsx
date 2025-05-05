
import './App.css'
import Header from './component/Header'
import Welcome from './component/Welcome'

const user= [
  {name:"suresh",age:20,status:"active"},
  {name:"ankit",age:40,status:"inactive"},
  {name:"rahul",age:30,status:"inactive"},
]
function App() {

  return (
    <>
     {/* <Welcome user={user}/> */}
     <Header/>
    </>
  )
}

export default App
