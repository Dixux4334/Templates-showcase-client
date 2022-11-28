import { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { decodeBase64 } from '../../../utils/base64'

const Code = ({ code, language }) => {
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true })
    hljs.highlightAll()
  }, [])
  const translatedCode = decodeBase64(code)
  return (
    <pre>
      <code className={`language-${language}`}>{translatedCode}</code>
    </pre>
  )
}

export default Code
