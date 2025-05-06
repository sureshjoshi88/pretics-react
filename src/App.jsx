
import './App.css'
import Card from './component/Card'
import Card2 from './component/Card2'
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
     {/* <Header/> */}
     <h2 className='font-bold text-3xl'>My Social Feed</h2>
     <Card title="react app" />
     <Card2 title="react app2" />
    </>
  )
}

export default App
