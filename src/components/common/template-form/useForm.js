import { useReducer, useEffect } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useApi from '../../../hooks/useApi'
import { encodeBase64 } from '../../../utils/base64'
import { templatesState } from '../../../atoms/templatesState'
import { getStylesheet } from '../../../atoms/filteredStyleSheetsState'
import {
  getTemplate,
  editTemplate,
} from '../../../atoms/filteredTemplatesState'

const useForm = (isEdit, editID, onClose) => {
  const { create, update } = useApi()
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const template = useRecoilValue(getTemplate(editID))

  const stylesheets = template.stylesheets.map(stylesheet => {
    const test = useRecoilValue(getStylesheet(stylesheet))
    return {
      value: test.id,
      label: test.name,
    }
  })
  const setNewTemplate = useSetRecoilState(templatesState)
  const setEditTemplate = useSetRecoilState(editTemplate(editID))

  useEffect(() => {
    if (isEdit)
      dispatch({
        type: 'SET_INITIAL_STATE',
        payload: { ...template, stylesheets },
      })
  }, [])

  const handleChange = ({ target: { name, value } }) =>
    dispatch({ type: 'CHANGE_INPUT', payload: { name, value } })

  const setTags = tags => dispatch({ type: 'SET_TAGS', payload: tags })
  const setStylesheets = stylesheets =>
    dispatch({ type: 'SET_STYLESHEETS', payload: stylesheets })
  const fetchStart = () => dispatch({ type: 'FETCH_START' })
  const fetchSuccess = () => dispatch({ type: 'FETCH_SUCCESS' })
  const fetchError = () => dispatch({ type: 'FETCH_ERROR' })

  const submit = () => {
    fetchStart()

    const data = {
      html: encodeBase64(formState.languages.html),
      js: encodeBase64(formState.languages.js),
      scss: encodeBase64(formState.languages.scss),
      tags: formState.tags.map(tag => tag.value),
      stylesheets: formState.stylesheets.map(stylesheet => stylesheet.value),
    }

    const onError = {
      toastTitle: 'an error has occurred',
      toastStatus: 'error',
      callBack: () => fetchError(),
    }

    if (isEdit) {
      const onSuccess = {
        toastTitle: 'Template has been successfully updated',
        toastStatus: 'success',
        callBack: res => {
          setEditTemplate(res)
          fetchSuccess()
          onClose()
        },
      }
      update('templates', editID, data, onSuccess, onError)
    } else {
      const onSuccess = {
        toastTitle: 'Template has been created successfully',
        toastStatus: 'success',
        callBack: res => {
          setNewTemplate(state => [...state, res])
          fetchSuccess()
          onClose()
        },
      }
      create('templates', data, onSuccess, onError)
    }
  }
  return {
    formState,
    handleChange,
    setTags,
    setStylesheets,
    submit,
  }
}

export default useForm
