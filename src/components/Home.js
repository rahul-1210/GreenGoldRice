import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import ContactUs from './ContactUs'

export default function Home() {
  return (
    <div className='container-fluid'>
        <Banner />
        <Services />
        <About />
        {/* <ContactUs/> */}
        <Footer/>
    </div>
  )
}
