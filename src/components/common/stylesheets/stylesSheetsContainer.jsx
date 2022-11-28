import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
// import { styleSheetsState } from '../../../atoms/styleSheetsState'
import { filteredStyleSheetsState } from '../../../atoms/filteredStyleSheetsState'
import StyleSheet from './StyleSheet'
import EditStylesheet from '../stylesheet-form/editStylesheet'

const StyleSheetsContainer = () => {
  const styleSheets = useRecoilValue(filteredStyleSheetsState)
  const editStyleSheetRef = useRef()
  const handleEditStylesheet = () => {
    editStyleSheetRef.current.onOpen()
  }
  return (
    <>
      {styleSheets.map(styleSheet => (
        <StyleSheet
          key={styleSheet.id}
          data={styleSheet}
          openEditModal={handleEditStylesheet}
        />
      ))}
      <EditStylesheet ref={editStyleSheetRef} />
    </>
  )
}

export default StyleSheetsContainer
