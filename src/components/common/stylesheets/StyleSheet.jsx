import { Box, Flex, Button } from '@chakra-ui/react'
import Code from '../codeHighlighter/code'
import useApi from '../../../hooks/useApi'
import { styleSheetsState } from '../../../atoms/styleSheetsState'
import { useSetRecoilState } from 'recoil'
import { editIdState } from '../../../atoms/editIdState'

const StyleSheet = ({ data, openEditModal }) => {
  const { name, id } = data
  const { remove } = useApi()
  const setEditID = useSetRecoilState(editIdState)
  const setStylesheets = useSetRecoilState(styleSheetsState)

  const handleRemove = () => {
    const onSuccess = {
      toastTitle: 'Stylesheet has been successfully removed',
      toastStatus: 'warning',
      callBack: res => {
        setStylesheets(res)
      },
    }
    const onError = {
      toastTitle: 'an error has occurred',
      toastStatus: 'error',
    }
    remove('stylesheets', id, onSuccess, onError)
  }
  const handleEdit = () => {
    openEditModal()
    setEditID(id)
  }
  return (
    <Box marginBottom={7}>
      <Flex alignItems={'center'} justifyContent={'space-between'} paddingY={2}>
        <Box>{name}</Box>
        <Flex gap={2}>
          <Button colorScheme="red" size="sm" onClick={handleRemove}>
            Remove
          </Button>
          <Button colorScheme="blue" size="sm" onClick={handleEdit}>
            Edit
          </Button>
        </Flex>
      </Flex>
      <Code code={data.code} language="scss" />
    </Box>
  )
}

export default StyleSheet
