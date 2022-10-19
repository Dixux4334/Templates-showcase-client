import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { filteredTemplatesState } from '../../atoms/filteredTemplatesState'
import TempatePageContent from '../common/templatePage/tempatePageContent'

const TemplatePageView = ({ pageId }) => {
  // let { pageId } = useParams()
  const templatesState = useRecoilValue(filteredTemplatesState)
  const template = templatesState.filter(el => el.id === pageId)[0]
  console.log('TemplatePageView called')

  return (
    <Suspense fallback="Loading........">
      <TempatePageContent data={template} />
    </Suspense>
  )
}

export default TemplatePageView
