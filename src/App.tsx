import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import AboutMe from "@/scenes/aboutMe"
import Projects from "@/scenes/projects"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    /* REMOVE EVENTLISTENER WHEN LEAVE THE PAGE */
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <AboutMe setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
