import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Services from './Services'
import ContactUs from './ContactUs'

export default function Home() {
  return (
    <div className='container-fluid'>
        <Banner />
        <Services />
        <ContactUs/>
        <Footer/>
    </div>
  )
}
