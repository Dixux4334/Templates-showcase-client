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
import { useRecoilState } from 'recoil'
import { editIdState } from '../../../atoms/editIdState'
import TemplateForm from './form'
const EditTemplate = forwardRef((props, ref) => {
  const formRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [editID, setEditID] = useRecoilState(editIdState)

  const handleClose = () => {
    setEditID('')
    onClose()
  }

  const handleSubmit = () => {
    formRef.current.submit()
  }
  useImperativeHandle(ref, () => ({ onOpen }))
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{editID}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TemplateForm
            isEdit={true}
            editID={editID}
            ref={formRef}
            onClose={onClose}
          />
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

EditTemplate.displayName = 'EditTemplate'

export default EditTemplate
