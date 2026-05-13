import Logo from './Logo'

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
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
            href="mailto:yaad4541@gmail.com"
            className="hover:text-brand-turquoise transition-colors font-medium"
          >
            yaad4541@gmail.com
          </a>
        </div>

        <div className="text-xs text-white/45 text-center">
          © {new Date().getFullYear()} יעד שירותי ניקיון. כל הזכויות שמורות.
        </div>

      </div>

      {/* Legal & accessibility row */}
      <div className="max-w-5xl mx-auto mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-xs text-white/40">
        <button
          onClick={onOpenPrivacy}
          className="hover:text-white transition-colors underline underline-offset-2"
        >
          מדיניות פרטיות
        </button>
        <span className="hidden sm:inline" aria-hidden="true">·</span>
        <button
          onClick={onOpenTerms}
          className="hover:text-white transition-colors underline underline-offset-2"
        >
          תנאי שימוש
        </button>
        <span className="hidden sm:inline" aria-hidden="true">·</span>
        <span>
          נגישות לפי תקן WCAG 2.1 ·{' '}
          <a
            href="mailto:yaad4541@gmail.com"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            yaad4541@gmail.com
          </a>
        </span>
      </div>
    </footer>
  )
}
