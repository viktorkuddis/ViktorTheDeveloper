
import './GlobalVariables.css'
import './Fonts.css'
import './App.css'

import AboutSection from './Components/AboutSection/AboutSection'
import Banner from './Components/Banner/Banner'
import ContactSection from './Components/ContactSection/ContactSection'
import ExperienceSection from './Components/ExperienceSection/ExperienceSection'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import NavBar from './Components/NavBar/NavBar'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection'
import { ArrowRight, Mail } from 'lucide-react'

function App() {


  return (
    <>
      {/* Detta är UI sample av de knappar som finns */}

      {/* <div style={{ background: "lightblue" }}>
        <br />
        <br />

        primary button
        <button className='btn-primary'>btn-primary</button>
        <br />
        <br />
        primary button small
        <button className='btn-primary btn-small'>btn-primary btn-small</button>
        <br />
        <br />

        button secondary
        <button className='btn-secondary'>btn-secondary</button>
        <br />
        <br />
        button secondary small
        <button className='btn-secondary btn-small'>btn-secondary btn-small</button>
        <br />
        <br />

        primary button inverted
        <button className='btn-primary-inverted'>btn-primary-inverted</button>
        <br />
        <br />
        primary button inverted small
        <button className='btn-primary-inverted btn-small'>btn-primary-inverted btn-small</button>
        <br />
        <br />

        button secondary inverted
        <button className='btn-secondary-inverted'>btn-secondary-inverted</button>
        <br />
        <br />
        button secondary inverted small
        <button className='btn-secondary-inverted btn-small'>btn-secondary-inverted btn-small</button>
        <br />
        <br />

      </div> */}


      <div style={{ background: "var(--accent-color-effect)", padding: "0.5rem", margin: "1rem" }}>
        <button className='btn-secondary-inverted'
          style={{
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "row",
            gap: "0.75rem",
            alignItems: "center"
          }}>
          <span>Mer om mig</span>
          <ArrowRight style={{ height: "1rem", width: "1rem" }} />

        </button>

      </div>
      <div style={{ background: "var(--accent-color-effect)", padding: "0.5rem", margin: "1rem", color: "white", display: "flex", gap: "2rem" }}>

        <span className='headding-loud' style={{ color: "white" }}>KONTAKTA MIG</span>
        <Mail />
        <span className='headding-loud' style={{ color: "white" }}>KONTAKTA MIG</span>
        <Mail /><span className='headding-loud' style={{ color: "white" }}>KONTAKTA MIG</span>
        <Mail /><span className='headding-loud' style={{ color: "white" }}>KONTAKTA MIG</span>
        <Mail /> <span className='headding-loud' style={{ color: "white" }}>KONTAKTA MIG</span>
        <Mail />



      </div >



      <NavBar />
      <HeroSection />
      <Banner />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Banner />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
