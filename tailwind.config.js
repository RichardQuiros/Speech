const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['src/**/*.js',
  'src/**/*.jsx',
  'src/**/*.ts',
  'src/**/*.tsx',
  'public/**/*.html',],
  theme: {
    extend: {
      colors:{
        blue:{
          '100':'#EBF8FF',
          '200':'#BEE3F8',
          '300':'#90CDF4',
          '400':'#63B3ED',
          '500':'#4299E1',
          '600':'#3182CE',
          '700':'#2B6CB0',
          '800':'#2C5282',
          '900':'#2A4365',
          '1000':'#0099ff'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
