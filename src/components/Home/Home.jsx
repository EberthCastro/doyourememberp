import React from 'react'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Dashboard/>
        <Footer/>
    </div>
  )
}

export default Home