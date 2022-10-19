import { Suspense } from 'react'
import { Container, Spinner } from '@chakra-ui/react'
import TemplatesContainer from '../common/template/templatesContainer'
import InputTag from '../common/inputTag/inputTag'
import Navbar from '../common/navbar/navbar'

const HomeView = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <InputTag belongsForm={false} />
        <Suspense fallback={<Spinner size="xl" />}>
          <TemplatesContainer />
        </Suspense>
      </Container>
    </>
  )
}

export default HomeView
