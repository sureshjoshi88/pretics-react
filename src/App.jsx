
import './App.css'
import Card from './component/Card'
import Card2 from './component/Card2'
import Form from './component/Form'
import Header from './component/Header'
import Welcome from './component/Welcome'

const user = [
  { name: "suresh", age: 20, status: "active" },
  { name: "ankit", age: 40, status: "inactive" },
  { name: "rahul", age: 30, status: "inactive" },
]
function App() {

  return (
    <>
      {/* <Welcome user={user}/> */}
      {/* <Header/> */}
       <h2 className='font-bold text-3xl text-center'>My Social Feed</h2>
      {/* <div className=' gap-5 md:flex w-full'>
        <div>
          <Card title="React app" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04HyzQ1x41KdCCV9KCHaeRdVvRszAP2Zc9A&s"} />

        </div>
        <div >
          <Card2 title="React vite" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6EAHvdbel54bf0pizpGJS2ZkDVfkcoEpuQ&s"} />

        </div>
      </div>  */}
      <Form/>
     
    </>
  )
}

export default App
