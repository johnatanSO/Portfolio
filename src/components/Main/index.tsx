import React, { useEffect } from 'react'
import './Main.module.scss'
import { SkillsContent } from './SkillsContent'
import { Projects } from './Projects'
import { Contacts } from './Contacts'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Main() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <main className="mainContent">
      <SkillsContent />
      <Projects />
      <Contacts />
    </main>
  )
}
