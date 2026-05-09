import { useState, useEffect } from 'react'

export default function CookieBanner({ onOpenPrivacy }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('yaad-cookies-accepted')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('yaad-cookies-accepted', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 right-0 left-0 z-50 bg-brand-navy border-t-2 border-brand-turquoise shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/85 text-sm text-center sm:text-right">
          באתר זה נעשה שימוש בקובצי עוגיות (Cookies) כדי להעניק לך את חוויית הגלישה הטובה ביותר.{' '}
          <button
            onClick={onOpenPrivacy}
            className="underline text-brand-turquoise hover:text-white transition-colors"
          >
            למדיניות הפרטיות המלאה
          </button>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-white text-brand-navy font-bold px-6 py-2 rounded-full text-sm hover:bg-brand-turquoise hover:text-white transition-colors duration-200"
        >
          אישור
        </button>
      </div>
    </div>
  )
}
