import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import '../App.css';
const Home = () => {

  // const headings = {
  //   hname: "THBS | Market Place",
  //   hcat1: "Home",
  //   hcat2: "Services",
  //   hcat3: "About Us"
  // }
  return (
    <>
      <Navbar  />
      <Hero />
      <h3 className='text-center m-5'>Service Categories</h3>
      <p className='categories'><a href="/products" id='link'>Online Shopping</a> </p>
      <p className='categories'>Money Transfer</p>
      <p className='categories'>Stock Exchange MarketPlace</p>
      <p className='categories'>Others</p>
    </>
  )
}

export default Home