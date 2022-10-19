import React from 'react'
import { decodeBase64 } from '../../../utils/base64'

const TempatePageContent = ({ data }) => {
  console.log('TempatePageContent called')
  const html = data.languages.filter(el => el.name === 'html')[0]
  const scss = data.languages.filter(el => el.name === 'scss')[0]
  const js = data.languages.filter(el => el.name === 'js')[0]

  // const jquery = document.createElement('script')
  // jquery.src = 'https://code.jquery.com/jquery-3.6.1.min.js'

  // const scriptTest = document.createElement('script')
  // scriptTest.text = decodeBase64(js.code)

  // document.head.appendChild(jquery)

  // jquery.addEventListener('load', () => {
  //   document.body.appendChild(scriptTest)
  // })

  return (
    <>
      <style>{decodeBase64(scss.compiled)}</style>
      <div dangerouslySetInnerHTML={{ __html: decodeBase64(html.code) }}></div>
      <script>{decodeBase64(js.code)}</script>
    </>
  )
}

export default TempatePageContent
