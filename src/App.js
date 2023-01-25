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

  // const [categories] = React.useState([
  //   <About />,
  //   <Portfolio />,
  //   <Contact />,
  //   <Resume />
  // ])
  // const [currentCategory, setCurrentCategory] = React.useState(categories[0])
  // //const [choosen, setChoosen] = React.useState()

  // function toggle(num) {
  //   console.log("here")
  //   if (num === 1) {
  //     setCurrentCategory(<About />)
  //   }
  //   else if (num === 2) {
  //     setCurrentCategory(<Portfolio />)
  //   }
  //   else if (num === 3) {
  //     setCurrentCategory(<Contact />)
  //   }
  //   else if (num === 4) {
  //     setCurrentCategory(<Resume />)
  //   }

  // }

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
