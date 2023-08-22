/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#06c2ae',
          200: '#02889b'
        },
        secondary: '#ff693a'
      }
    },
  },
  // variants: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         100: '#06c2ae',
  //         200: '#02889b'
  //       },
  //       secondary: '#ff693a'
  //     }
  //   }
  // },
  plugins: [],
}

