import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e63946',
        'primary-dark': '#d62828',
        'accent': '#f77f00',
        'light-bg': '#f8f9fa',
        'light-bg-secondary': '#ffffff',
        'light-text': '#1a1a1a',
        'light-text-secondary': '#555555',
        'light-border': '#e0e0e0',
        'success': '#2ecc71',
        'warning': '#f39c12',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
