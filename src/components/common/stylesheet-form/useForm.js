import { useReducer, useEffect } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useApi from '../../../hooks/useApi'
import { encodeBase64 } from '../../../utils/base64'
import { styleSheetsState } from '../../../atoms/styleSheetsState'
import {
  getStylesheet,
  editStylesheet,
} from '../../../atoms/filteredStyleSheetsState'

const useForm = (isEdit, editID, onClose) => {
  const { create, update } = useApi()
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const stylesheet = useRecoilValue(getStylesheet(editID))

  const setNewStyleSheet = useSetRecoilState(styleSheetsState)
  const setEditStyleSheet = useSetRecoilState(editStylesheet(editID))

  useEffect(() => {
    if (isEdit) dispatch({ type: 'SET_INITIAL_STATE', payload: stylesheet })
  }, [])

  const handleChange = ({ target: { name, value } }) =>
    dispatch({ type: 'CHANGE_INPUT', payload: { name, value } })

  const fetchStart = () => dispatch({ type: 'FETCH_START' })
  const fetchSuccess = () => dispatch({ type: 'FETCH_SUCCESS' })
  const fetchError = () => dispatch({ type: 'FETCH_ERROR' })

  const submit = () => {
    fetchStart()

    const data = {
      name: formState.name,
      code: encodeBase64(formState.code),
    }

    const onError = {
      toastTitle: 'an error has occurred',
      toastStatus: 'error',
      callBack: () => fetchError(),
    }

    if (isEdit) {
      const onSuccess = {
        toastTitle: 'Stylesheet has been successfully updated',
        toastStatus: 'success',
        callBack: res => {
          setEditStyleSheet(res)
          fetchSuccess()
          onClose()
        },
      }
      update('stylesheets', editID, data, onSuccess, onError)
    } else {
      const onSuccess = {
        toastTitle: 'Stylesheet has been created successfully',
        toastStatus: 'success',
        callBack: res => {
          setNewStyleSheet(state => [...state, res])
          fetchSuccess()
          onClose()
        },
      }
      create('stylesheets', data, onSuccess, onError)
    }
  }
  return {
    formState,
    handleChange,
    submit,
  }
}

export default useForm
