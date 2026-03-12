
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
import { Mail } from 'lucide-react'

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






      <NavBar />
      <HeroSection />
      <Banner
        bannerContent={<div style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          gap: "2rem"
        }}>
          <span
            className='headding-loud'
            style={{
              color: "white",
              flexShrink: "0",
              fontSize: "1rem"
            }}>
            KONTAKTA MIG
          </span>
          <Mail
            style={{
              color: "white",
              flexShrink: "0",
              height: "1.5rem",
              width: "1.5rem"
            }} />
        </div>}
        bannerType={"double"}
        repeatContent={10}
        gap={"2rem"} link={"kontakt"} />
      < AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <Banner bannerType={"singleUnderBanner"}
        bannerContent={null}
        repeatContent={false}
        gap={''} /> */}
      <Banner
        bannerContent={<div style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          gap: "2rem"
        }}>
          <span
            className='headding-loud'
            style={{
              color: "white",
              flexShrink: "0",
              fontSize: "1rem"
            }}>
            KONTAKTA MIG
          </span>
          <Mail
            style={{
              color: "white",
              flexShrink: "0",
              height: "1.5rem",
              width: "1.5rem"
            }} />
        </div>}
        bannerType={"double"}
        repeatContent={10}
        gap={"2rem"} link={''} />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
