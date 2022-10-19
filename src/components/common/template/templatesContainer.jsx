import { useRef } from 'react'
import Template from './template'
import { useRecoilValue } from 'recoil'
import { filteredTemplatesState } from '../../../atoms/filteredTemplatesState'
import EditTemplate from '../create-editTemplate/editTemplate'

const TemplatesContainer = () => {
  const templates = useRecoilValue(filteredTemplatesState)
  const editTemplateRef = useRef()

  const handleEditTemplate = () => {
    editTemplateRef.current.onOpen()
  }

  return (
    <>
      {templates.map((template, index) => (
        <Template
          data={template}
          key={index}
          openEditModal={handleEditTemplate}
        ></Template>
      ))}
      <EditTemplate ref={editTemplateRef} />
    </>
  )
}

export default TemplatesContainer
