import React from "react"
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Layout from "./Layout/Structure"
import Home from "./components/Home"
import { Suspense } from "react"
function App() {
  const About = React.lazy(() => import('./components/About'))
  return (
    <div className="w-screen bg-[#1c1f2b]">    <BrowserRouter>

     <Suspense fallback={<h1>loading...</h1>}>

       <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>} />
         </Route>      
       </Routes>

      </Suspense>

    </BrowserRouter>
    </div>
  )
}

export default App
