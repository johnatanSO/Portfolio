import React from 'react'
import "./Main.css"
import SkillsContent from '../SkillsContent/SkillsContent'
import Projects from '../Projects/Projects'

export default function Main() {
  return (
    <main className="mainContent">
      <SkillsContent></SkillsContent>
      <Projects></Projects>
    </main>
  )
}
