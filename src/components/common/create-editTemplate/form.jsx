import { forwardRef, useImperativeHandle } from 'react'
import { Textarea, Text, Spinner } from '@chakra-ui/react'
import InputTag from '../inputTag/inputTag'
import useForm from './useForm'

const TemplateForm = forwardRef(({ isEdit, editID, onClose }, ref) => {
  const { formState, handleChange, setTags, submit } = useForm(
    isEdit,
    editID,
    onClose
  )

  useImperativeHandle(ref, () => ({ submit }))

  return formState.isLoading ? (
    <Spinner />
  ) : (
    <>
      <Text mb={2}>HTML:</Text>
      <Textarea
        mb={3}
        value={formState.languages.html}
        onChange={handleChange}
        name="html"
      />
      <Text mb={2}>SCSS:</Text>
      <Textarea
        mb={3}
        value={formState.languages.scss}
        onChange={handleChange}
        name="scss"
      />
      <Text mb={2}>Javascript:</Text>
      <Textarea
        mb={3}
        value={formState.languages.js}
        onChange={handleChange}
        name="js"
      />
      <Text>Tags:</Text>
      <InputTag
        belongsForm={true}
        formTags={formState.tags}
        setTags={setTags}
      />
    </>
  )
})

TemplateForm.displayName = 'TemplateForm'

export default TemplateForm
