import Typography from "typography"

const typography = new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Mabry Trial", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  headerWeight: '500',
  boldWeight: '300',
  headerColor: '#4f658e',
  bodyColor: 'hsl(0,0%,0%,0.7)',
  contrastColor: '#EEEEEE',
  actionColor: '#6890d9',
  scaleRatio: 2.3,
  
  overrideStyles: ({ rhythm, scale }, options) => ({
    '*': {
      boxSizing: 'border-box'
    },
    ':root': {
      fontSize: `calc(${options.baseFontSize} + 0.5vw)`
    },
    h1: {
      lineHeight: 1.2
    },
    a: {
      color: options.headerColor,
      fontWeight: 500
    },
    'a:hover': {
      color: options.actionColor
    },
    aside: {
      ...scale(-2 / 5)
    }
  })
})

export default typography
