export default function useStyle(element, params = {}) {
  const el = element

  Object.keys(params).forEach((par) => {
    el.style[par] = params[par]
  })
}
