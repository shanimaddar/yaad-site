import { Phone } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

    

        <Logo variant="light" className="h-11 w-auto" />
        

        <a
          href="tel:+972-54-6254125"
          className="flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand-turquoise hover:text-white transition-colors duration-200 shadow-md"
        >
          <Phone size={16} />
          <span>חייג עכשיו</span>
        </a>

      </div>
    </header>
  )
}
