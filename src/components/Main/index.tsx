import React, { useEffect } from 'react'
import style from './Main.module.scss'
import { SkillsContent } from './SkillsContent'
import { Projects } from './Projects'
import { Contacts } from './Contacts'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Experience } from './Experience'

export function Main() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <main className={style.mainContainer}>
      <SkillsContent />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  )
}
