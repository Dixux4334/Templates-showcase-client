import { useToast } from '@chakra-ui/react'
import apiService from '../services/api'

const useApi = () => {
  const toast = useToast()
  const handleResponse = (res, { toastTitle, toastStatus, callBack }) => {
    if (callBack !== undefined) callBack(res)
    toast({
      title: toastTitle,
      status: toastStatus,
      description: res?.response?.data?.message,
      isClosable: true,
    })
  }

  const update = (service, id, data, successData, errorData) =>
    apiService
      .update(service, id, data)
      .then(res => handleResponse(res, successData))
      .catch(err => handleResponse(err, errorData))

  const create = (service, data, successData, errorData) =>
    apiService
      .create(service, data)
      .then(res => handleResponse(res, successData))
      .catch(err => handleResponse(err, errorData))
  const remove = (service, id, successData, errorData) => {
    apiService
      .deleteItem(service, id)
      .then(res => handleResponse(res, successData))
      .catch(err => {
        // console.log('error delete function')
        handleResponse(err, errorData)
      })
  }
  return {
    create,
    update,
    remove,
  }
}

export default useApi
