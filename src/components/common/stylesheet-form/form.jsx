import { forwardRef, useImperativeHandle } from 'react'
import { Textarea, Text, Spinner } from '@chakra-ui/react'
import useForm from './useForm'

const StylesheetsForm = forwardRef(({ isEdit, editID, onClose }, ref) => {
  const { formState, handleChange, submit } = useForm(isEdit, editID, onClose)

  useImperativeHandle(ref, () => ({ submit }))

  return formState.isLoading ? (
    <Spinner />
  ) : (
    <>
      <Text mb={2}>Name</Text>
      <Textarea
        mb={3}
        value={formState.name}
        onChange={handleChange}
        name="name"
      />
      <Text mb={2}>Code:</Text>
      <Textarea
        mb={3}
        value={formState.code}
        onChange={handleChange}
        name="code"
      />
    </>
  )
})

StylesheetsForm.displayName = 'StylesheetsForm'

export default StylesheetsForm
