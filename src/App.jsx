import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
function App() {

  return (
    <div className="mx-[50px] md:mx-[100px]  h-fit border-white text-[#b3b3b3]">   
          <Navbar />
          <Home />
          <About />
          <Footer />
    </div>
  )
}

export default App
