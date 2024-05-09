import React, { useEffect } from 'react'
import { Navebar } from '../Component/Navebar'
import {Section} from '../Component/Section'
import { Footer } from '../Component/Footer'
import { Popular } from '../Component/Popular'
import { Categories } from '../Component/Categories'



const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Navebar/>
    <Section/>
    <Popular/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default Home