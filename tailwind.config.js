/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan these files for class names so unused styles are purged from the build.
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      // Brand palette. Swap `bg-brand-50`/`text-brand-900` on <body> in index.html
      // to flip between the light theme and a dark dashboard-style aesthetic.
      colors: {
        brand: {
          50: '#fbf9f6',
          900: '#1a1c23',
          gold: '#b89456',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
