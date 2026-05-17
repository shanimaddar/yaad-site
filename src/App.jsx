import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustSignals from './components/TrustSignals'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyModal from './components/PrivacyModal'
import TermsModal from './components/TermsModal'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <div className="font-sans w-full overflow-x-hidden" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSignals />
        <ContactForm onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />
      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  )
}
