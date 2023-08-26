/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 20s ease infinite',
        'gradient-y': 'gradient-y 20s ease infinite',
        'gradient-xy': 'gradient-xy 20s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-image': 'linear-gradient(0deg, black, blue, darkgreen)',
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-image': 'linear-gradient(90deg, black, blue, darkgreen)',
            'background-size': '200% 200%',
            'background-position': 'left bottom'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right top'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-image': 'linear-gradient(-45deg, black, blue, darkgreen)',
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    }
  },
  plugins: [],
}
