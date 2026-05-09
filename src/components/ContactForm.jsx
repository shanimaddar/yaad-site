import { useState } from 'react'
import { Send } from 'lucide-react'

const inputClass =
  "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-right text-brand-navy font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-azure transition-colors duration-200"

export default function ContactForm({ onOpenPrivacy }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    // בדיקה שכל השדות מלאים ושיש הסכמה
    if (!form.name || !form.phone || !form.service || !consent) {
      return
    }

    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-3">
            צור קשר
          </h2>
          <p className="text-gray-500 text-lg">השאירו פרטים ונחזור אליכם בהקדם</p>
          <div className="mt-4 w-16 h-1 bg-brand-turquoise mx-auto rounded-full" />
        </div>

        {submitted ? (
          <div className="bg-brand-navy/5 border-2 border-brand-azure rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4 text-brand-azure">✓</div>
            <h3 className="text-xl font-black text-brand-navy mb-2">תודה! קיבלנו את פנייתך</h3>
            <p className="text-gray-600">נחזור אליך בהקדם האפשרי.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-brand-navy">שם מלא *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="הכנס שם מלא"
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-brand-navy">טלפון *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="05X-XXXXXXX"
                required
                dir="ltr"
                className={inputClass + " text-left"}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-brand-navy">סוג שירות *</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>בחר סוג שירות</option>
                <option value="building">בניין מגורים</option>
                <option value="office">משרד</option>
                <option value="other">אחר</option>
              </select>
            </div>

            {/* Consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  required
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                    consent
                      ? 'bg-brand-azure border-brand-azure'
                      : 'bg-white border-gray-300 group-hover:border-brand-azure'
                  }`}
                >
                  {consent && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-600 leading-snug">
                קראתי ואני מסכים/מסכימה ל
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-brand-azure underline underline-offset-2 hover:text-brand-navy transition-colors mx-1"
                >
                  מדיניות הפרטיות
                </button>
                ומאשר/מאשרת קבלת הצעת מחיר ושירות מהעסק. *
              </span>
            </label>

            <button
              type="submit"
              disabled={!consent}
              className="flex items-center justify-center gap-2 bg-brand-azure text-white font-black text-lg px-8 py-4 rounded-xl hover:bg-brand-navy transition-colors duration-200 shadow-md mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              <span>שלח פנייה</span>
            </button>
          </form>
        )}

      </div>
    </section>
  )
}