import { Box, Flex, useColorModeValue, Container, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { useNavLinks } from './useNavLinks'

const Navbar = () => {
  const { pathname } = useLocation()
  const NavLinks = useNavLinks(pathname)

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container maxW="container.lg">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
              <Link as={ReactRouterLink} to="/">
                Templates-showcase
              </Link>
            </Box>
            <NavLinks />
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Navbar
