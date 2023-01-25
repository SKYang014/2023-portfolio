//import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Hero from './components/Hero';


function App() {


  return (


    <div className="bg-neutral">
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  )
}

export default App;
