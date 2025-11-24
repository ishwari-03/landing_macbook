import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Features from './components/Features'
import Performance1 from './components/Performance1.jsx'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <Performance1 />
    <Features />
    <Highlights />
    <Footer/>
   </main>
  )
}

export default App