import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import HeadlinesCards from './componenet/HeadlinesCards'
import Food from './componenet/Food'
import Category from './componenet/Category'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <HeadlinesCards/>
    <Food/>
    <Category/>
   </div>
  )
}

export default App