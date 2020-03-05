import Typography from "typography"

export default new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Poppins", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  headerWeight: '500',
  boldWeight: '300',
  headerColor: '#326273',
  bodyColor: 'hsl(0,0%,0%,0.7)',
  contrastColor: '#EEEEEE',
  actionColor: '#5C9EAD',
  scaleRatio: 2,
  overrideStyles: ({ rhythm }, options, styles) => ({
    ':root': {
      fontSize: `calc(${options.baseFontSize} + 0.5vw);`
    },
    a: {
      color: options.headerColor,
      fontWeight: 'bold'
    },
    'a:hover': {
      color: options.actionColor
    }
  })
})
