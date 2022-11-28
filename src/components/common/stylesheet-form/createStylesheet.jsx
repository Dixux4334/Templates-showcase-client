import { forwardRef, useImperativeHandle, useRef } from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import StylesheetsForm from './form'

const CreateStylesheet = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useImperativeHandle(ref, () => ({ onOpen }))

  const formRef = useRef()
  const handleSubmit = () => {
    formRef.current.submit()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Stylesheet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <StylesheetsForm isEdit={false} ref={formRef} onClose={onClose} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" size="sm" mr={2} onClick={handleSubmit}>
            Save
          </Button>
          <Button colorScheme="blue" size="sm" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})
CreateStylesheet.displayName = 'CreateStylesheet'

export default CreateStylesheet
