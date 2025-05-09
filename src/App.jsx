 import  Navbar from "./components/Navbar"
import About from "./components/About"
 import Footer from "./components/F ooter"
 import Home from "./components/Home"
 import Project from "./components/Projects"
function App() {

   return (
    <div className="md:mx-[100px]  h-fit border-white text-[#b3b3b3]">   
          <Navbar />
          <Home />
          <About />
          <Project />
          <Footer />
    </div>
  )
}

export default App
