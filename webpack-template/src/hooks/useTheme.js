export default function useTheme(theme = {}) {
  Object.keys(theme).forEach((key) => {
    document.documentElement.style.setProperty(key, theme[key])
  })
}
