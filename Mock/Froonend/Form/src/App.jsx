import ContactForm from './Compontnts/Form'
import Header from './Compontnts/Header'
import HeroSection from './Compontnts/HeroSection'
import About from './Compontnts/Abou'
import WhyUs from './Compontnts/WhyUs'
import Testimonials from './Compontnts/Testimonials'
import Services from './Compontnts/Services'
import Footer from './Compontnts/Footer'

function App() {
  

  return (
    <>
     <div className='overflow-x-hidden' >
        <Header/>
        <HeroSection/>
        <About/>
        <WhyUs/>
        <Services/>
        <Testimonials/>
        <ContactForm/>
        <Footer/>
     </div>
    </>
  )
}

export default App