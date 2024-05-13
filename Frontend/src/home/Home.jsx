import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home