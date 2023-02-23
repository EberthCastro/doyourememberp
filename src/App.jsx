import { useState } from 'react'
import './App.css'
import Aboutus from './components/aboutus'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer />
      <Aboutus />
    </div>
  )
}

export default App
