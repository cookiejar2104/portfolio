import { Navbar } from "./components/navbar"
import { Home } from "./components/Home.jsx"
import { About } from "./components/About.jsx"
import { Exp } from "./components/Exp"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

export default function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>  
    <Exp/>  
    <Projects/>
    <Contact/>
    </>
  )
}