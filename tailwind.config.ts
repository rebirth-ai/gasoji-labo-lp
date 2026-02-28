import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kuma: {
          orange: '#FF6B35',
          brown: '#3D2B1F',
          cream: '#FFF8F0',
          gold: '#F5A623',
          light: '#FFE4CC',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
