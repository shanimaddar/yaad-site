import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function PrivacyModal({ open, onClose }) {
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
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-black text-brand-navy">מדיניות פרטיות</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-brand-navy transition-colors rounded-full p-1"
            aria-label="סגור"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-6 text-gray-700 text-sm leading-relaxed space-y-5">

          <p className="text-xs text-gray-400">עדכון אחרון: מאי 2025</p>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">1. כללי</h3>
            <p>
              יעד שירותי ניקיון ("החברה", "אנו") מכבדת את פרטיות המשתמשים באתר זה ומחויבת להגן על המידע האישי שנמסר לנו.
              מדיניות פרטיות זו מתארת אילו פרטים נאספים, כיצד אנו משתמשים בהם ואת אמצעי ההגנה הננקטים.
              השימוש באתר מהווה הסכמה לתנאי מדיניות זו.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">2. מידע הנאסף</h3>
            <p>כאשר אתם יוצרים עמנו קשר דרך טפסי האתר, אנו עשויים לאסוף את הפרטים הבאים:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 mr-3">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כתובת דוא"ל</li>
              <li>כתובת הנכס (לצורך מתן הצעת מחיר)</li>
              <li>סוג השירות המבוקש</li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">3. מטרת איסוף המידע</h3>
            <p>המידע הנאסף משמש אך ורק למטרות הבאות:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 mr-3">
              <li>מתן הצעות מחיר לשירותי ניקיון</li>
              <li>תיאום פגישות ומתן שירות</li>
              <li>מענה לפניות ושאלות</li>
              <li>שיפור השירות ללקוחות</li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">4. שמירה על סודיות והעברה לצד שלישי</h3>
            <p>
              החברה מחויבת לשמור על סודיות המידע האישי שנמסר לנו. אנו לא נמכור, נשכיר או נעביר מידע אישי לצדדים שלישיים
              ללא הסכמתך המפורשת, למעט:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 mr-3">
              <li>גורמים הנדרשים לצורך מתן השירות בלבד (כגון צוות החברה)</li>
              <li>מקרים הנדרשים על פי דין או צו שיפוטי</li>
            </ul>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">5. קובצי עוגיות (Cookies)</h3>
            <p>
              האתר עושה שימוש בקובצי עוגיות לצורך שיפור חוויית הגלישה ואיסוף נתונים סטטיסטיים אנונימיים.
              עוגיות הן קבצי טקסט קטנים המאוחסנים במכשירך. ניתן להגדיר את הדפדפן לדחות עוגיות,
              אולם הדבר עשוי לפגוע בחלק מתכונות האתר.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">6. אבטחת מידע</h3>
            <p>
              אנו נוקטים באמצעי אבטחה מתאימים להגנה על המידע האישי מפני גישה לא מורשית, שינוי,
              חשיפה או מחיקה. עם זאת, אין אבטחה מושלמת ברשת האינטרנט, ואנו לא נישא באחריות לאירועי
              אבטחה שאינם בשליטתנו.
            </p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">7. זכויותיך</h3>
            <p>בהתאם לחוק הגנת הפרטיות, תשמ"א-1981 ותקנותיו, עומדות לך הזכויות הבאות:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 mr-3">
              <li>הזכות לעיין במידע האישי השמור אודותיך</li>
              <li>הזכות לתיקון מידע שגוי</li>
              <li>הזכות לבקש מחיקת מידע</li>
            </ul>
            <p className="mt-2">למימוש זכויות אלו יש לפנות אלינו בכתב לכתובת המייל המופיעה להלן.</p>
          </section>

          <section>
            <h3 className="font-black text-brand-navy text-base mb-2">8. צור קשר</h3>
            <p>
              לשאלות או פניות בנוגע למדיניות פרטיות זו, ניתן לפנות אלינו בדוא"ל:{' '}
              <a href="mailto:services@yaad-clean.co.il" className="text-brand-azure underline">
                services@yaad-clean.co.il
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
