import { useState, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load — קומפוננטות מתחת ל-fold נטענות רק כשצריך
const Services     = lazy(() => import('./components/Services'))
const TrustSignals = lazy(() => import('./components/TrustSignals'))
const ContactForm  = lazy(() => import('./components/ContactForm'))
const Footer       = lazy(() => import('./components/Footer'))
const CookieBanner = lazy(() => import('./components/CookieBanner'))
const PrivacyModal = lazy(() => import('./components/PrivacyModal'))
const TermsModal   = lazy(() => import('./components/TermsModal'))

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <div className="font-sans w-full overflow-x-hidden" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <TrustSignals />
          <ContactForm onOpenPrivacy={() => setPrivacyOpen(true)} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />
        <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
        <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      </Suspense>
    </div>
  )
}
