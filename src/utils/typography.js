import Typography from "typography"

export default new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Poppins", "sans-serif"],
  headerWeight: '500',
  boldWeight: '300',
  bodyFontFamily: ["Roboto", "sans-serif"],
  scaleRatio: 2,
  overrideStyles: ({ rhythm }, options, styles) => ({
    ':root': {
      fontSize: `calc(${options.baseFontSize} + 0.5vw);`
    }
  })
})
