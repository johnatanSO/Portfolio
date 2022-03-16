import React, {useEffect} from 'react'
import "./Main.css"
import SkillsContent from '../SkillsContent/SkillsContent'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'



export default function Main() {
  
  return (
    <main className="mainContent">
      <SkillsContent></SkillsContent>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}
