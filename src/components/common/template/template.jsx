import ThumbnailsContainer from './thumbnailsContainer'
import Tabs from './tabs'
import { Box } from '@chakra-ui/react'
import { templatesState } from '../../../atoms/templatesState'
import { useSetRecoilState } from 'recoil'

const Template = ({ data, openEditModal }) => {
  const setTemplates = useSetRecoilState(templatesState)
  const { id, languages } = data
  return (
    <Box paddingBottom={4}>
      <ThumbnailsContainer id={id} />
      <Tabs
        languages={languages}
        id={id}
        openEditModal={openEditModal}
        setTemplates={setTemplates}
      ></Tabs>
    </Box>
  )
}

export default Template
