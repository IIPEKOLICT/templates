import './styles.scss'
import template from './template.html'
import useHtml from '#hooks/useHtml'

export default function App() {
    const html = useHtml(template)

    html.append(useHtml('<h1>Hello world</h1>'))
    return html
}
