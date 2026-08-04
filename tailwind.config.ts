import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'im-black': '#1F1F23',
        'im-offwhite': '#F8F5E7',
        'im-bluegreen': '#67817F',
        'im-ashgrey': '#30373B',
        'im-deepred': '#451F23',
        'im-yellow': '#E4B73C',
        'im-grey': '#A8A5A1',
        'im-greenlight': '#B9C7C2',
      },
    },
  },
} satisfies Config
