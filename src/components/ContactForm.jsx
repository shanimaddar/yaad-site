import { useState } from 'react'
import { Send } from 'lucide-react'

const inputClass =
  "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-right text-brand-navy font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-azure transition-colors duration-200"

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
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
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-brand-navy">שם מלא</label>
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
              <label className="text-sm font-semibold text-brand-navy">טלפון</label>
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
              <label className="text-sm font-semibold text-brand-navy">סוג שירות</label>
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
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-brand-azure text-white font-black text-lg px-8 py-4 rounded-xl hover:bg-brand-navy transition-colors duration-200 shadow-md mt-2"
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
