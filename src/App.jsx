import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustSignals from './components/TrustSignals'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
