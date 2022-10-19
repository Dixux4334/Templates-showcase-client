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
import TemplateForm from './form'

const CreateTemplate = forwardRef((props, ref) => {
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
        <ModalHeader>Create Template</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TemplateForm isEdit={false} ref={formRef} onClose={onClose} />
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
CreateTemplate.displayName = 'CreateTemplate'

export default CreateTemplate
