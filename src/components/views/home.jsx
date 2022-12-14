import { Container } from '@chakra-ui/react'
import TemplatesContainer from '../common/template/templatesContainer'
import InputTag from '../common/inputTag/inputTag'
import Navbar from '../common/navbar/navbar'

const HomeView = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <InputTag belongsForm={false} />
        <TemplatesContainer />
      </Container>
    </>
  )
}

export default HomeView
