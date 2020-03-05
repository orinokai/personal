import Typography from "typography"

export default new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Poppins", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  headerWeight: '500',
  boldWeight: '300',
  headerColor: 'hsl(300,54%,30%,1)',
  bodyColor: 'hsl(0,0%,0%,0.7)',
  contrastColor: '#A9FBC3',
  actionColor: 'hsl(283,43%,65%,0.7)',
  scaleRatio: 2,
  overrideStyles: ({ rhythm }, options, styles) => ({
    ':root': {
      fontSize: `calc(${options.baseFontSize} + 0.5vw);`
    },
    a: {
      color: options.headerColor
    },
    'a:hover': {
      color: options.actionColor
    }
  })
})
