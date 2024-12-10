export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flyonui/dist/js/*.js',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flyonui'),
    require('flyonui/plugin'),
    require('preline/plugin')
  ],
};
