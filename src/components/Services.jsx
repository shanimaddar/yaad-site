import { Building2, Briefcase, Building } from 'lucide-react'

function ServiceCard({ icon: Icon, title, bullets, accentColor }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-7 flex flex-col gap-4 border-t-4"
      style={{ borderTopColor: accentColor }}
    >
      <div
        className="w-13 h-13 w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: accentColor + '18' }}
      >
        <Icon size={26} style={{ color: accentColor }} strokeWidth={1.8} />
      </div>

      <h3 className="text-xl font-black text-brand-navy">{title}</h3>

      <ul className="space-y-2.5 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1 — משרדים פרטיים */}
          <ServiceCard
            icon={Briefcase}
            title="משרדים פרטיים"
            accentColor="#1167B1"
            bullets={[
              "ניקיון שטח העבודה היומיומי",
              "חדרי ישיבות וחללים משותפים",
              "גמישות בשעות השירות",
            ]}
          />

          {/* 2 — בנייני משרדים */}
          <ServiceCard
            icon={Building}
            title="בנייני משרדים"
            accentColor="#0B4A8A"
            bullets={[
              "ניהול ותחזוקה שוטפת של הבניין",
              "ניקיון לובי, מסדרונות ומעליות",
              "שטחים משותפים בין שוכרים",
              "ליווי מקצועי מתמשך",
            ]}
          />

          {/* 3 — בנייני מגורים */}
          <ServiceCard
            icon={Building2}
            title="בנייני מגורים"
            accentColor="#0A2647"
            bullets={[
              "ניקיון חדרי מדרגות ומסדרונות",
              "לובי וכניסות מרשימות",
              "שטחים משותפים ומעליות",
              "טיפול שוטף ומתוזמן",
            ]}
          />

        </div>
      </div>
    </section>
  )
}
