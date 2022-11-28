import { useToast } from '@chakra-ui/react'
import templatesService from '../../services/api'

const useApi = () => {
  const toast = useToast()
  const handleResponse = (res, { toastTitle, toastStatus, callBack }) => {
    callBack(res)
    toast({
      title: toastTitle,
      status: toastStatus,
      description: res?.response?.data?.message,
      isClosable: true,
    })
  }

  const updateTemplate = (id, data, successData, errorData) =>
    templatesService
      .update(id, data)
      .then(res => handleResponse(res, successData))
      .catch(err => handleResponse(err, errorData))

  const createTemplate = (data, successData, errorData) =>
    templatesService
      .create(data)
      .then(res => handleResponse(res, successData))
      .catch(err => handleResponse(err, errorData))
  const removeTemplate = (id, successData, errorData) => {
    templatesService
      .deleteItem(id)
      .then(res => handleResponse(res, successData))
      .catch(err => handleResponse(err, errorData))
  }
  return {
    createTemplate,
    updateTemplate,
    removeTemplate,
  }
}

export default useApi
