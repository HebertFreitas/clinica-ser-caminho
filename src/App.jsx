import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
