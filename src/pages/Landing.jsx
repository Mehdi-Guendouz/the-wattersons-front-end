import Home from "../Home"
import  Heading  from "../component/Heading"
import Navbar from "../component/Navbar"
import About from "../About"
import SecHeading from "../component/SecHeading"
import JTTS from "../JTTS"
import Contactus from "../Contactus"
import Footer from "../Footer"

function Landing() {
  return (
    
  <div className="bg-black">
      <Navbar id="Navbar" />
      <Home id="Home" />
      <Heading myString="About TrackUp" id="Heading"/>
      <About id="About"/>
      <SecHeading myString="Join the trial System" id="SecHeading"/>
      <JTTS id="JTTS"/>
      <Contactus id="Contactus"/>
      <Footer />
      
      
    </div>
  )
}


export default Landing