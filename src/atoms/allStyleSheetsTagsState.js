import { selector } from 'recoil'
import { styleSheetsState } from './styleSheetsState'

export const allStyleSheetsTagsState = selector({
  key: 'allStyleSheetsTags',
  get: ({ get }) => {
    const styleSheets = get(styleSheetsState)
    const allTags = styleSheets.map(styleSheet => ({
      value: styleSheet.id,
      label: styleSheet.name,
    }))
    return allTags
  },
})
