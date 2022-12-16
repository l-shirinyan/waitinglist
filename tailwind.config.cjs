/** @type {import('tailwindscss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'light-grey': '#F4F4F4',
        purple: '#4A46FF',
        'grey-900': '#374151',
        'grey-200': '#F2F2F2',
        'light-purple': '#D7D6FF',
        'perwinkle-purple': '#F5F5FF',
        'grey-500': '#5B5A87',
      },
      borderColor: {
        purple: '#4A46FF',
        'grey-200': '#F2F2F2',
        'light-purple': '#D7D6FF',
        'grey-300': '#E9E9E9',
      },
      textColor: {
        purple: '#4A46FF',
        'grey-100': '#737373',
        'grey-500': '#5B5A87',
        'grey-600': '#6B7280',
        'grey-900': '#42416D',
        'purple-300': '#02007A',
        red: '#FF0000',
        'grey-800': '#374151',
        'grey-700': '#717171',
      },
    },
  },
  plugins: [],
}
