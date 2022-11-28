import { Container } from '@chakra-ui/react'
import Navbar from '../common/navbar/navbar'
import StyleSheetsContainer from '../common/stylesheets/stylesSheetsContainer'
import InputTag from '../common/inputTag/inputTag'

const StylesheetsView = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <InputTag belongsForm={false} />
        <StyleSheetsContainer />
      </Container>
    </>
  )
}

export default StylesheetsView
