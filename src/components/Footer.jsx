import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t-4 border-brand-turquoise py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/80">

        {/* Logo with waves + sparkle */}
        <Logo variant="light" className="h-16 w-auto" />

        {/* Contact info */}
        <div className="flex flex-col items-center gap-1 text-sm">
          <a
            href="tel:+972-54-6254125"
            className="hover:text-brand-turquoise transition-colors font-medium"
            dir="ltr"
          >
            054-6254125
          </a>
          <a href="mailto:services@yaad-clean.co.il" className="hover:text-brand-turquoise transition-colors font-medium">
              <span>services@yaad-clean.co.il</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/45 text-center">
          © {new Date().getFullYear()} יעד שירותי ניקיון. כל הזכויות שמורות.
        </div>

      </div>
    </footer>
  )
}
