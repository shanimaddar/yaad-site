import Logo from './Logo'

export default function Hero() {
  return (
    <section className="bg-hero-gradient flex items-center justify-center px-4 py-16 text-center min-h-[82vh]">
      <div className="max-w-3xl mx-auto">

        <div className="flex justify-center mb-6">
          <Logo variant="light" className="h-auto drop-shadow-xl" style={{ width: '22rem', maxWidth: '85vw' }} />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 drop-shadow-md">
          הסטנדרט החדש בניקיון
          <br />
          <span className="text-brand-turquoise">מהבית ועד למשרד</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          יעד שירותי ניקיון מספקת פתרונות אחזקה וניקיון מתקדמים לבניינים יוקרתיים ולמשרדים המעוניינים בסביבת עבודה מנצחת.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-brand-navy font-black text-lg px-9 py-4 rounded-full shadow-xl hover:bg-brand-turquoise hover:text-white transition-colors duration-200 w-full sm:w-auto text-center"
          >
            קבל הצעת מחיר
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white font-bold text-lg px-9 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-colors duration-200 w-full sm:w-auto text-center"
          >
            גלה את השירותים
          </a>
        </div>

      </div>
    </section>
  )
}
