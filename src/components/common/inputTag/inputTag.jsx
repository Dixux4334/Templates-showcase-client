import { useEffect } from 'react'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import { allTemplatesTagsState } from '../../../atoms/allTemplatesTagsState'
// import { searchTagsState } from '../../../atoms/searchTagsSate'
import { useInputTag } from './useInputTag'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import { useLocation } from 'react-router-dom'

const InputTag = ({ belongsForm, formTags, setFormTags }) => {
  const { pathname } = useLocation()
  const { allTags, selectedTags, handleCreateTag, handleSelectedTagsChange } =
    useInputTag({ pathname, belongsForm, formTags, setFormTags })

  useEffect(() => {
    document.activeElement.blur()
  }, [])
  return (
    <CUIAutoComplete
      disableCreateItem={!belongsForm}
      placeholder="Type a tag"
      items={allTags}
      selectedItems={selectedTags}
      onSelectedItemsChange={changes =>
        handleSelectedTagsChange(changes.selectedItems)
      }
      onCreateItem={handleCreateTag}
      highlightItemBg="gray.600"
      listStyleProps={{ bg: 'gray.700' }}
    />
  )
}

export default InputTag
