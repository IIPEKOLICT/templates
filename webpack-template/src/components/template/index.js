import './styles.scss'
import template from './template.html'
import useHtml from '#hooks/useHtml'

export default function Template() {
    return useHtml(template)
}
