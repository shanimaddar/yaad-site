import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function TermsModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 id="terms-title" className="text-xl font-black text-brand-navy">
            תנאי שימוש
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-brand-navy transition-colors rounded-full p-1"
            aria-label="סגור חלון תנאי שימוש"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 text-gray-700 text-sm leading-relaxed space-y-5">

          <p className="text-xs text-gray-400">עדכון אחרון: מאי 2025</p>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">1. כללי</h3>
            <p>
              ברוכים הבאים לאתר יעד שירותי ניקיון ("האתר"). השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן.
              גלישה או שימוש בכל חלק מהאתר מהווים הסכמה לתנאים אלו במלואם. אם אינך מסכים לתנאים, אנא הימנע משימוש באתר.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">2. השירותים המוצעים</h3>
            <p>
              האתר מציג מידע על שירותי ניקיון ותחזוקה הניתנים על ידי יעד שירותי ניקיון לבנייני מגורים, משרדים פרטיים ובנייני משרדים.
              המידע באתר הוא כללי בלבד ואינו מהווה התחייבות לזמינות או מחיר ספציפי. הסכם מחייב ייווצר
              רק לאחר תיאום מפורש בין הצדדים ובכתב.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">3. הגבלת אחריות</h3>
            <p>
              המידע באתר מסופק "כפי שהוא" (AS IS). החברה אינה אחראית לכל נזק ישיר, עקיף, מקרי או תוצאתי
              הנובע משימוש באתר, לרבות נזק הנובע מהסתמכות על מידע מוצג באתר. החברה שומרת לעצמה את הזכות
              לשנות, להוסיף או להסיר תכנים בכל עת וללא הודעה מוקדמת.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">4. קניין רוחני</h3>
            <p>
              כל התכנים המופיעים באתר, לרבות לוגו, עיצוב, טקסטים, תמונות ומרכיבים גרפיים, הם קניינה הבלעדי
              של יעד שירותי ניקיון. אין להעתיק, לשכפל, לפרסם, לשדר או להשתמש בתכנים אלה ללא אישור מראש ובכתב.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">5. פרטיות ועוגיות</h3>
            <p>
              השימוש במידע אישי הנמסר דרך האתר כפוף למדיניות הפרטיות שלנו. האתר עושה שימוש בקובצי עוגיות (Cookies)
              לשיפור חוויית הגלישה. לפרטים נוספים ראה מדיניות הפרטיות המלאה.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">6. קישורים חיצוניים</h3>
            <p>
              האתר עשוי להכיל קישורים לאתרי צד שלישי. החברה אינה אחראית לתוכן, לנכונות המידע
              או למדיניות הפרטיות של אתרים חיצוניים אלה.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">7. שינויים בתנאים</h3>
            <p>
              החברה רשאית לעדכן את תנאי השימוש מעת לעת. שינויים ייכנסו לתוקף עם פרסומם באתר.
              המשך השימוש לאחר שינוי תנאים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">8. הדין החל וסמכות שיפוט</h3>
            <p>
              תנאי שימוש אלה כפופים לדין הישראלי. סמכות השיפוט הבלעדית לכל מחלוקת הנובעת מהם תהא
              לבתי המשפט המוסמכים במחוז תל אביב, ישראל.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">9. יצירת קשר</h3>
            <p>
              לשאלות הנוגעות לתנאי שימוש אלה, ניתן לפנות אלינו בדוא"ל:{' '}
              <a href="mailto:yaad4541@gmail.com" className="text-brand-azure underline">
                yaad4541@gmail.com
              </a>
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-gray-100 flex justify-center">
          <button
            onClick={onClose}
            className="bg-brand-azure text-white font-bold px-8 py-2.5 rounded-full hover:bg-brand-navy transition-colors duration-200"
          >
            הבנתי, סגור
          </button>
        </div>
      </div>
    </div>
  )
}
