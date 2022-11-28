import { useRef } from 'react'
import Template from './template'
import { useRecoilValue } from 'recoil'
import { filteredTemplatesState } from '../../../atoms/filteredTemplatesState'
import EditTemplate from '../template-form/editTemplate'

const TemplatesContainer = () => {
  const templates = useRecoilValue(filteredTemplatesState)
  const editTemplateRef = useRef()

  const handleEditTemplate = () => {
    editTemplateRef.current.onOpen()
  }

  return (
    <>
      {templates.map(template => (
        <Template
          data={template}
          key={template.id}
          openEditModal={handleEditTemplate}
        ></Template>
      ))}
      <EditTemplate ref={editTemplateRef} />
    </>
  )
}

export default TemplatesContainer
