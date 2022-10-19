import { useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { allTagsState } from '../../../atoms/allTagsState'
import { searchTagsState } from '../../../atoms/searchTagsSate'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'

const InputTag = ({ belongsForm, formTags, setTags }) => {
  const tagsState = useRecoilValue(allTagsState)
  const [allTags, setAllTags] = useState(tagsState)
  const [searchTags, setSearchTags] = useRecoilState(searchTagsState)

  const handleCreateItem = item => {
    setTags([...formTags, item])
    setAllTags(curr => [...curr, item])
  }

  const handleSelectedItemsChange = selectedItems => {
    if (selectedItems) {
      if (belongsForm) {
        setTags(selectedItems)
      } else {
        setSearchTags(selectedItems)
      }
    }
  }

  return (
    <CUIAutoComplete
      placeholder="Type a tag"
      onCreateItem={handleCreateItem}
      items={belongsForm ? allTags : tagsState}
      disableCreateItem={!belongsForm}
      selectedItems={belongsForm ? formTags : searchTags}
      onSelectedItemsChange={changes =>
        handleSelectedItemsChange(changes.selectedItems)
      }
      listStyleProps={{ bg: 'gray.700' }}
      highlightItemBg="gray.600"
      inputStyleProps={{ autoFocus: false }}
    />
  )
}

export default InputTag
