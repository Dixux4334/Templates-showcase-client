import { useRef } from 'react'
import { Button, Link, Flex } from '@chakra-ui/react'
import CreateTemplate from '../template-form/createTemplate'
import CreateStylesheet from '../stylesheet-form/createStylesheet'
import { Link as ReactRouterLink } from 'react-router-dom'

export const NavLinksTemplates = () => {
  const createTemplateRef = useRef()
  const handleClick = () => {
    createTemplateRef.current.onOpen()
  }
  return (
    <>
      <Flex gap={5} alignItems={'center'}>
        <Link as={ReactRouterLink} to="/stylesheets">
          Stylesheets
        </Link>
        <Button colorScheme="blue" size="sm" onClick={handleClick}>
          Add Template
        </Button>
      </Flex>
      <CreateTemplate ref={createTemplateRef} />
    </>
  )
}

export const NavLinksStyleSheets = () => {
  const createStyleSheetRef = useRef()
  const handleClick = () => {
    createStyleSheetRef.current.onOpen()
  }
  return (
    <>
      <Flex gap={5} alignItems={'center'}>
        <Link as={ReactRouterLink} to="/">
          Templates
        </Link>
        <Button colorScheme="blue" size="sm" onClick={handleClick}>
          Add stylesheet
        </Button>
      </Flex>
      <CreateStylesheet ref={createStyleSheetRef} />
    </>
  )
}
