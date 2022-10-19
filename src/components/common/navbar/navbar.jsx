import { useRef } from 'react'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import CreateTemplate from '../create-editTemplate/createTemplate'

const Navbar = () => {
  const createTemplateRef = useRef()
  const handleClick = () => {
    createTemplateRef.current.onOpen()
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container maxW="container.lg">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Logo</Box>
            <Button colorScheme="blue" size="sm" onClick={handleClick}>
              Add Template
            </Button>
          </Flex>
        </Container>
      </Box>
      <CreateTemplate ref={createTemplateRef} />
    </>
  )
}

export default Navbar
