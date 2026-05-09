import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustSignals from './components/TrustSignals'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyModal from './components/PrivacyModal'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const openPrivacy = () => setPrivacyOpen(true)
  const closePrivacy = () => setPrivacyOpen(false)

  return (
    <div className="font-sans" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSignals />
        <ContactForm onOpenPrivacy={openPrivacy} />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      <CookieBanner onOpenPrivacy={openPrivacy} />
      <PrivacyModal open={privacyOpen} onClose={closePrivacy} />
    </div>
  )
}
