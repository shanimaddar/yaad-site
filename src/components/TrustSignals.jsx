import { ShieldCheck, Clock, UserCheck } from 'lucide-react'

const signals = [
  {
    icon: ShieldCheck,
    title: "מקצועיות",
    description: "צוות מיומן ומוסמך עם ניסיון של שנים בתחום הניקיון המסחרי והמגורים.",
  },
  {
    icon: Clock,
    title: "אמינות",
    description: "מגיעים בזמן, מסיימים בזמן. אתם יכולים לסמוך עלינו - תמיד.",
  },
  {
    icon: UserCheck,
    title: "שירות אישי",
    description: "כל לקוח מקבל מענה אישי ותוכנית ניקיון מותאמת לצרכיו הספציפיים.",
  },
]

export default function TrustSignals() {
  return (
    <section className="bg-brand-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            למה לבחור ביעד?
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-turquoise mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-colors duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-brand-turquoise/25 flex items-center justify-center mb-5">
                <Icon size={32} className="text-brand-turquoise" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-white mb-3">{title}</h3>
              <p className="text-white/75 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
