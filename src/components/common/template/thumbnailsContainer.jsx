import Thumbnail from './thumbnail'
import { Box } from '@chakra-ui/react'

function ThumbnailsContainer({ id }) {
  return (
    <Box display="flex" gap={4} mb={4}>
      <Thumbnail id={id} />
      <Thumbnail id={id} isMobile={true} />
    </Box>
  )
}

export default ThumbnailsContainer
