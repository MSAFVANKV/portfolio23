import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Profilepic from './Components/Profilepic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
import Progressbar from './Components/Progressbar'
import Axios from 'axios'
import Skills from './Components/Skills'

function App() {

  const [data, setData]=useState("")
  const getData = async() => {
    const response = await Axios.get(`http://localhost:3001`)
    setData(response.data)
  }

  useEffect(() => {
    getData();
  },[])
  const [showEmail, setShowEmail] = useState(false);
  const toggleEmailDisplay = () => {
    setShowEmail(prev => !prev);
  };

  return (
    <>
       <div>{data}</div>
    <Header onEmailClick={toggleEmailDisplay}/>
    <Sidebar/>
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <Introduction/>
          <About/>
          <Services/>
          <Skills/>

        </div>
        <div className="hidden md:block">
        <Progressbar/>
          <Profilepic showEmail={showEmail} />

        </div>
      </div>
    </>
  )
}

export default App
