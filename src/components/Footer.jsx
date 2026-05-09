import Logo from './Logo'

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-brand-navy border-t-4 border-brand-turquoise py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/80">

        <Logo variant="light" className="h-16 w-auto" />

        <div className="flex flex-col items-center gap-1 text-sm">
          <a
            href="tel:+972-54-6254125"
            className="hover:text-brand-turquoise transition-colors font-medium"
            dir="ltr"
          >
            054-6254125
          </a>
          <a
            href="mailto:services@yaad-clean.co.il"
            className="hover:text-brand-turquoise transition-colors font-medium"
          >
            services@yaad-clean.co.il
          </a>
        </div>

        <div className="text-xs text-white/45 text-center">
          © {new Date().getFullYear()} יעד שירותי ניקיון. כל הזכויות שמורות.
        </div>

      </div>

      {/* Legal & accessibility row */}
      <div className="max-w-5xl mx-auto mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/40">
        <button
          onClick={onOpenPrivacy}
          className="hover:text-white transition-colors underline underline-offset-2"
        >
          מדיניות פרטיות
        </button>
        <span className="hidden sm:inline">·</span>
        <span>
          האתר נבנה תוך מאמץ לעמוד בדרישות נגישות בסיסיות לפי תקן WCAG 2.1.
          לפניות בנושא נגישות:{' '}
          <a
            href="mailto:services@yaad-clean.co.il"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            services@yaad-clean.co.il
          </a>
        </span>
      </div>
    </footer>
  )
}
