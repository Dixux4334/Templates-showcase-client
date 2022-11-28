import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { allTemplatesTagsState } from '../../../atoms/allTemplatesTagsState'
import { allStyleSheetsTagsState } from '../../../atoms/allStyleSheetsTagsState'
import { searchTagsState } from '../../../atoms/searchTagsSate'

export const useInputTag = ({
  pathname,
  belongsForm,
  formTags,
  setFormTags,
}) => {
  const tagsStates = {
    '/': useRecoilValue(allTemplatesTagsState),
    '/stylesheets': useRecoilValue(allStyleSheetsTagsState),
  }
  const formTagsStates = {
    templates: useRecoilValue(allTemplatesTagsState),
    stylesheets: useRecoilValue(allStyleSheetsTagsState),
  }
  const initialTags = belongsForm
    ? formTagsStates[belongsForm] || formTagsStates.templates
    : tagsStates[pathname] || tagsStates['/']
  const [allTags, setAllTags] = useState(initialTags)

  useEffect(() => {
    setAllTags(initialTags)
  }, [initialTags])

  const [searchTags, setSearchTags] = useRecoilState(searchTagsState)

  const selectedTags = belongsForm ? formTags : searchTags

  useEffect(() => {
    if (!belongsForm) {
      setSearchTags([])
      return
    }

    setFormTags([])
  }, [pathname])

  const handleCreateTag = item => {
    if (belongsForm) {
      setFormTags([...formTags, item])
      return
    }

    setAllTags(curr => [...curr, item])
  }
  const handleSelectedTagsChange = selectedItems => {
    if (!selectedItems) return
    if (!belongsForm) {
      setSearchTags(selectedItems)
      return
    }

    setFormTags(selectedItems)
  }
  return {
    allTags,
    selectedTags,
    handleCreateTag,
    handleSelectedTagsChange,
  }
}
