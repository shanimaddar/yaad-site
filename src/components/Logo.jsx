import React from 'react'

export default function Logo({ variant = 'light', className = '' }) {
  return (
    <a href="/" className="block">
      <img
        src="./logo-yaad.png"
        alt="יעד שירותי ניקיון"
        className={className}
        width="200"
        height="80"
        fetchpriority={variant === 'light' ? 'high' : 'auto'}
        style={{
          width: 'auto',
          display: 'block',
          filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </a>
  )
}
