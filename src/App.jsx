import { useScrollReveal } from './hooks/useScrollReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SectionDivider from './components/SectionDivider'
import Services from './components/Services'
import Approach from './components/Approach'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider from="hero" to="white" />
        <About />
        <Services />
        <SectionDivider from="white" to="green" />
        <Approach />
        <SectionDivider from="green" to="creamDark" />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
