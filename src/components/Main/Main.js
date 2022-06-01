import React, {useEffect} from 'react'
import "./Main.scss"
import SkillsContent from '../SkillsContent/SkillsContent'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Main() {

  useEffect(() =>{
    AOS.init({duration: 800})
  },[])
  
  return (
    <main className="mainContent">
      <SkillsContent></SkillsContent>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}
