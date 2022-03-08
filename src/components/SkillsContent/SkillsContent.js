import React from "react"
import "./SkillsContent.css"

function SkillsContent(){
  return(
    <section className="skillsContent">
        <div className="skillsText">
          <h2>Skills and experience</h2>
          <p>Lorem Ipsum is simply dumetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <ul className="skillsImageGrid">

          <li className="skill1"><img align="center" alt="John-HTML"  width="70"                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/></li>

          <li className="skill2"><img align="center" alt="John-CSS" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" /></li>

          <li className="skill3"> <img align="center" alt="John-JS"  width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/></li>

          <li className="skill4"><img align="center" alt="John-React" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" /></li>

          <li className="skill5"><img align="center" alt="John-Bootstrap" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" /></li>

          <li className="skill6"><img align="center" alt="John-SASS" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/></li>

          <li className="skill7"> <img align="center" alt="John-Jquery" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"/></li>

          <li className="skill8"><img align="center" alt="John-Git" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain-wordmark.svg" /></li>
          

        </ul>
      </section>
  )
}


export default SkillsContent
