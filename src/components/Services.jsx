import { Building2, Briefcase } from 'lucide-react'

function ServiceCard({ icon: Icon, title, audience, bullets, accentColor }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-5 border-t-4"
      style={{ borderTopColor: accentColor }}
    >
      {/* שורת האייקון והתגית למעלה */}
      <div className="flex justify-between items-start">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: accentColor + '18' }}
        >
          <Icon size={28} style={{ color: accentColor }} strokeWidth={1.8} />
        </div>

        <div
          className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full"
          style={{ backgroundColor: accentColor + '18', color: accentColor }}
        >
          {audience}
        </div>
      </div>

      <h3 className="text-2xl font-black text-brand-navy">{title}</h3>

      <ul className="space-y-3 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700">
            <span
              className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-3">
            השירותים שלנו
          </h2>
          <p className="text-gray-500 text-lg">פתרון מקצועי לכל סוג נכס</p>
          <div className="mt-4 w-16 h-1 bg-brand-turquoise mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <ServiceCard
            icon={Building2}
            title="בנייני מגורים"
            accentColor="#0A2647"
            audience="לוועדי בתים"
            bullets={[
              "ניקיון חדרי מדרגות ומסדרונות",
              "לובי וכניסות מרשימות",
              "שטחים משותפים ומעליות",
              "טיפול שוטף ומתוזמן",
            ]}
          />
          <ServiceCard
            icon={Briefcase}
            title="משרדים"
            accentColor="#1167B1"
            audience="למנהלי עסקים"
            bullets={[
              "ניקיון שטח העבודה היומיומי",
              "תחזוקה פרימיום ושמירה על תדמית",
              "חדרי ישיבות וחללים משותפים",
              "גמישות בשעות השירות",
            ]}
          />
        </div>

      </div>
    </section>
  )
}