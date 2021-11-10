export default function useHtml(template) {
  const t = document.createElement('template')
  t.innerHTML = template
  return t.content.firstChild
}
