import Code from '../codeHighlighter/code'
import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Button,
} from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { editIdState } from '../../../atoms/editIdState'
import useApi from '../../../hooks/useApi'

const Tabs = ({ languages, id, openEditModal, setTemplates }) => {
  const { remove } = useApi()
  const setEditID = useSetRecoilState(editIdState)
  const handleRemove = () => {
    const onSuccess = {
      toastTitle: 'Template has been successfully removed',
      toastStatus: 'warning',
      callBack: res => {
        setTemplates(res)
      },
    }
    const onError = {
      toastTitle: 'an error has occurred',
      toastStatus: 'error',
    }
    remove('templates', id, onSuccess, onError)
  }
  const handleEdit = () => {
    openEditModal()
    setEditID(id)
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Code:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabsChakra variant="enclosed">
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <TabList>
                {languages.map((el, index) => (
                  <Tab key={index}>{el.name}</Tab>
                ))}
              </TabList>
              <Flex gap={2}>
                <Button colorScheme="red" size="sm" onClick={handleRemove}>
                  Remove
                </Button>
                <Button colorScheme="blue" size="sm" onClick={handleEdit}>
                  Edit
                </Button>
              </Flex>
            </Flex>
            <TabPanels>
              {languages.map((el, index) => (
                <TabPanel key={index} padding="0px" marginTop="1px">
                  <Code code={el.code} language={el.name} />
                </TabPanel>
              ))}
            </TabPanels>
          </TabsChakra>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Tabs
