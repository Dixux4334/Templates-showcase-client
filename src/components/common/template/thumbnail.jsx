import { useState, useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const Thumbnail = ({ id, isMobile }) => {
  const [scaleValue, setScaleValue] = useState(0)
  const [thumbnailHeight, setThumbnailHeight] = useState('')
  const thumbnailWrapperRef = useRef(null)
  const thumbnailRef = useRef(null)
  const baseUrl = import.meta.env.VITE_PAGES_URL

  const resizeThumbnail = () => {
    setScaleValue(
      thumbnailWrapperRef.current.offsetWidth / thumbnailRef.current.offsetWidth
    )
  }
  useEffect(() => {
    window.addEventListener('resize', resizeThumbnail)
    return () => window.removeEventListener('resize', resizeThumbnail)
  }, [])

  useEffect(() => {
    setThumbnailHeight(thumbnailWrapperRef.current.clientHeight / scaleValue)
  }, [scaleValue])

  return (
    <Box width="50%" height="225px" overflow="hidden" ref={thumbnailWrapperRef}>
      <Box
        ref={thumbnailRef}
        onLoad={resizeThumbnail}
        transform={`scale(${scaleValue})`}
        transformOrigin="0 0"
        width={isMobile ? '767px' : '1920px'}
        height={thumbnailHeight}
      >
        <iframe
          src={`${baseUrl}/${id}`}
          frameBorder="0"
          style={{ height: '100%' }}
          width="100%"
        ></iframe>
      </Box>
    </Box>
  )
}

export default Thumbnail
