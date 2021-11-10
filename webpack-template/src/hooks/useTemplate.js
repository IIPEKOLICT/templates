export default function useTemplate(template, vars = {}) {
  return Object.keys(vars).reduce(
    (acc, v) =>
      acc.replace(new RegExp(`{{( ?| +)${v}( ?| +)}}`, 'gi'), vars[v]),
    template
  )
}
