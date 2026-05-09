import { useId } from 'react'

export default function Logo({ variant = 'light', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const gradId = `yaad-g-${uid}`

  const isLight      = variant === 'light'
  const navyFill     = isLight ? '#FFFFFF'                 : '#0A2647'
  const subtitleFill = isLight ? 'rgba(255,255,255,0.85)'  : '#0A2647'
  const dividerColor = isLight ? 'rgba(255,255,255,0.28)'  : '#B8D0E2'

  // ע gradient — top-to-bottom matching the reference
  const aynTop    = isLight ? '#9DD4EE' : '#0A2647'
  const aynBottom = isLight ? '#C8E8F8' : '#1167B1'

  // wave colors matching the reference (3 teal shades, darker → lighter)
  const wave1Color   = isLight ? '#3AAECF' : '#1282AA'
  const wave2Color   = isLight ? '#54C2DF' : '#0DA0C4'
  const wave3Color   = isLight ? '#74D6EC' : '#08BEDC'
  const sparkleColor = isLight ? '#60CCEC' : '#00C8E0'

  return (
    <svg
      viewBox="0 0 280 115"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="יעד שירותי ניקיון"
      role="img"
    >
      <defs>
        {/* Top-to-bottom gradient for ע — dark navy at top, azure at baseline */}
        <linearGradient id={`${gradId}-ayn`} x1="0" y1="0" x2="0" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={aynTop} />
          <stop offset="100%" stopColor={aynBottom} />
        </linearGradient>
      </defs>

      {/* "יעד" wordmark — Hebrew RTL visual: י=right, ע=center, ד=left */}
      <text
        x="148"
        y="70"
        textAnchor="middle"
        fontFamily="Heebo, sans-serif"
        fontWeight="900"
        fontSize="76"
        direction="rtl"
        unicodeBidi="embed"
      >
        <tspan fill={navyFill}>י</tspan>
        <tspan fill={`url(#${gradId}-ayn)`} dx="-3">ע</tspan>
        <tspan fill={navyFill}>ד</tspan>
      </text>

      {/* Three horizontal S-curve waves — contained within ע area, sparkle at right tip */}
      <path
        d="M 122,71 C 143,63 161,79 182,71 C 200,64 215,67 230,62"
        stroke={wave1Color}
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 124,79 C 145,71 163,87 184,79 C 202,72 217,75 232,70"
        stroke={wave2Color}
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 126,87 C 147,79 165,95 186,87 C 204,80 219,83 234,78"
        stroke={wave3Color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* 4-pointed sparkle at upper-right tip of wave cluster */}
      <g transform="translate(230, 57)">
        <path
          d="M 0,-10 C 0.7,-1.3 1.3,-0.7 10,0 C 1.3,0.7 0.7,1.3 0,10 C -0.7,1.3 -1.3,0.7 -10,0 C -1.3,-0.7 -0.7,-1.3 0,-10 Z"
          fill={sparkleColor}
        />
      </g>

      {/* Thin horizontal separator */}
      <line x1="18" y1="96" x2="262" y2="96" stroke={dividerColor} strokeWidth="1.2" />

      {/* "שירותי ניקיון" subtitle */}
      <text
        x="140"
        y="112"
        textAnchor="middle"
        fontFamily="Heebo, sans-serif"
        fontWeight="500"
        fontSize="13.5"
        fill={subtitleFill}
        letterSpacing="1"
      >
        שירותי ניקיון
      </text>
    </svg>
  )
}
