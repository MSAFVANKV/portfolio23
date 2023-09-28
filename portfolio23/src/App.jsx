import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Profilepic from './Components/Profilepic'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Services from './Components/Services'
import Progressbar from './Components/Progressbar'

function App() {
  const [showEmail, setShowEmail] = useState(false);
  const toggleEmailDisplay = () => {
    setShowEmail(prev => !prev);
  };

  return (
    <>
      
    <Header onEmailClick={toggleEmailDisplay}/>
    <Sidebar/>
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <Introduction/>
          <About/>
          <Services/>

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
