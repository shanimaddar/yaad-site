import { useState, useRef, useEffect } from 'react'
import { Send, Loader2 } from 'lucide-react'

// ─── מפתחות ──────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY     = '54446b12-590f-4644-8d15-c5dfc68dc373'
const RECAPTCHA_SITE_KEY = '6LduBuosAAAAAKd_pV61qJH4A-zgQCqMS-cX8KMm'
// Secret Key → הדבק אותו בדשבורד של Web3Forms בלבד (לא בקוד!)
// ─────────────────────────────────────────────────────────────────────────────

const MIN_FILL_SECONDS = 4

const inputClass =
  "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-right text-brand-navy font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-azure transition-colors duration-200"

const SERVICE_LABELS = {
  office:               'משרד פרטי',
  building_office:      'בניין משרדים',
  building_residential: 'בניין מגורים',
  other:                'אחר',
}

/** טוען את סקריפט reCAPTCHA v3 פעם אחת */
function loadRecaptcha(siteKey) {
  if (document.getElementById('recaptcha-script')) return
  const s = document.createElement('script')
  s.id  = 'recaptcha-script'
  s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
  s.async = true
  document.head.appendChild(s)
}

/** מבצע verify ומחזיר token */
function getRecaptchaToken(siteKey, action = 'contact_submit') {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) return reject(new Error('reCAPTCHA לא נטען'))
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(reject)
    })
  })
}

export default function ContactForm({ onOpenPrivacy }) {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')          // נסתר — בוטים ממלאים, בני-אדם לא
  const [status, setStatus]   = useState('idle')        // idle | loading | success | error
  const loadTime              = useRef(Date.now())

  // טעינת reCAPTCHA v3 בטעינת הקומפוננטה
  useEffect(() => {
    loadRecaptcha(RECAPTCHA_SITE_KEY)
  }, [])

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // שכבה 1 — Honeypot
    if (honeypot) {
      setStatus('success')  // תגובה מזויפת לבוט
      return
    }

    // שכבה 2 — בדיקת זמן
    if ((Date.now() - loadTime.current) / 1000 < MIN_FILL_SECONDS) {
      setStatus('success')
      return
    }

    // שכבה 3 — שדות חובה
    if (!form.name || !form.phone || !form.service || !consent) return

    setStatus('loading')

    try {
      // שכבה 4 — reCAPTCHA v3 token
      const recaptchaToken = await getRecaptchaToken(RECAPTCHA_SITE_KEY)

      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:            WEB3FORMS_KEY,
          subject:               `פנייה חדשה מאתר יעד — ${form.name}`,
          from_name:             form.name,
          replyto:               form.email || undefined,
          botcheck:              false,
          'g-recaptcha-response': recaptchaToken,   // ← Web3Forms מאמת server-side
          // ── תוכן המייל ──
          'שם מלא':    form.name,
          'טלפון':     form.phone,
          'אימייל':    form.email || '—',
          'סוג שירות': SERVICE_LABELS[form.service] || form.service,
          'הודעה':     form.message || '—',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        throw new Error(data.message || 'שגיאה')
      }
    } catch (err) {
      console.error('Form error:', err)
      setStatus('error')
    }
  }

  // ── הצלחה ─────────────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-brand-navy/5 border-2 border-brand-azure rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4 text-brand-azure">✓</div>
            <h3 className="text-xl font-black text-brand-navy mb-2">תודה! קיבלנו את פנייתך</h3>
            <p className="text-gray-600">נחזור אליך בהקדם האפשרי.</p>
          </div>
        </div>
      </section>
    )
  }

  // ── הטופס ─────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-3">צור קשר</h2>
          <p className="text-gray-500 text-lg">השאירו פרטים ונחזור אליכם בהקדם</p>
          <div className="mt-4 w-16 h-1 bg-brand-turquoise mx-auto rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-gray-50 rounded-2xl p-8 shadow-lg">

          {/* Honeypot — נסתר מבני-אדם, בוטים ממלאים */}
          <div aria-hidden="true" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
            <input type="text" name="website" value={honeypot}
              onChange={e => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
          </div>

          {/* שגיאה */}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm text-center">
              שגיאה בשליחה — אנא נסה שוב או פנה אלינו ישירות במייל.
            </div>
          )}

          {/* שם */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-name" className="text-sm font-semibold text-brand-navy">
              שם מלא <span className="text-red-500">*</span>
            </label>
            <input id="cf-name" type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="הכנס שם מלא" required autoComplete="name" className={inputClass} />
          </div>

          {/* טלפון */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-phone" className="text-sm font-semibold text-brand-navy">
              טלפון <span className="text-red-500">*</span>
            </label>
            <input id="cf-phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="05X-XXXXXXX" required dir="ltr" autoComplete="tel"
              className={inputClass + ' text-left'} />
          </div>

          {/* אימייל */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-email" className="text-sm font-semibold text-brand-navy">
              אימייל <span className="text-gray-400 font-normal text-xs">(אופציונלי)</span>
            </label>
            <input id="cf-email" type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="example@mail.com" dir="ltr" autoComplete="email"
              className={inputClass + ' text-left'} />
          </div>

          {/* סוג שירות */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-service" className="text-sm font-semibold text-brand-navy">
              סוג שירות <span className="text-red-500">*</span>
            </label>
            <select id="cf-service" name="service" value={form.service}
              onChange={handleChange} required className={inputClass}>
              <option value="" disabled>בחר סוג שירות</option>
              <option value="office">משרד פרטי</option>
              <option value="building_office">בניין משרדים</option>
              <option value="building_residential">בניין מגורים</option>
              <option value="other">אחר</option>
            </select>
          </div>

          {/* הודעה */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-message" className="text-sm font-semibold text-brand-navy">
              הודעה <span className="text-gray-400 font-normal text-xs">(אופציונלי)</span>
            </label>
            <textarea id="cf-message" name="message" value={form.message} onChange={handleChange}
              placeholder="פרטים נוספים, שאלות, גודל הנכס..." rows={3}
              className={inputClass + ' resize-none'} />
          </div>

          {/* הסכמה */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}
                className="sr-only" />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                consent ? 'bg-brand-azure border-brand-azure' : 'bg-white border-gray-300 group-hover:border-brand-azure'
              }`}>
                {consent && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-600 leading-snug">
              קראתי ואני מסכים/מסכימה ל
              <button type="button" onClick={onOpenPrivacy}
                className="text-brand-azure underline underline-offset-2 hover:text-brand-navy transition-colors mx-1">
                מדיניות הפרטיות
              </button>
              ומאשר/מאשרת קבלת הצעת מחיר ושירות מהעסק. <span className="text-red-500">*</span>
            </span>
          </label>

          {/* כפתור שליחה */}
          <button type="submit" disabled={!consent || status === 'loading'}
            className="flex items-center justify-center gap-2 bg-brand-azure text-white font-black text-lg px-8 py-4 rounded-xl hover:bg-brand-navy transition-colors duration-200 shadow-md mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'loading'
              ? <><Loader2 size={20} className="animate-spin" /><span>שולח...</span></>
              : <><Send size={20} /><span>שלח פנייה</span></>
            }
          </button>

          {/* reCAPTCHA attribution (חובה לפי תנאי Google) */}
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            האתר מוגן על-ידי reCAPTCHA של Google —{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-gray-600">מדיניות פרטיות</a>{' '}
            ו
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-gray-600">תנאי שימוש</a>.
          </p>

        </form>
      </div>
    </section>
  )
}
