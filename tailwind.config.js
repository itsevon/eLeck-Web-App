
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'eleck-primary': '#43425D',
        'eleck-secondary': '#323240',
      },
      fontFamily: {
        "source-sans-pro": ['Source Sans Pro', 'sans-serif'],
      },
      checkbox: {
        styles: {
          root: {
            label: {
              color: '#43425D' ,
              backgroundcolor: 'transparent',
            }
          }
        }
      },
    },
  },

})
