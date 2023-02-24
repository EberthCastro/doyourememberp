import '../../styles/contact.css'
import React from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import Form from '../Contact/Form'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <h2>Contact</h2>
          <div className='contactContainer'>
            <div>
              <h5>Can't find the experience you are looking for?</h5>
              <p>We have created this space so that you can ask us about the experience you are looking for, so that we can help you find it and, if we don't have it yet, do everything possible so that you can enjoy it in the future.
              In addition to any other questions you may have.</p>
            </div>
            <Form/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact