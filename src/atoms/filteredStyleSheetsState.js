import { selector, selectorFamily } from 'recoil'
import { searchTagsState } from './searchTagsSate'
import { styleSheetsState } from './styleSheetsState'

export const filteredStyleSheetsState = selector({
  key: 'FilteredStyleSheets',
  get: ({ get }) => {
    const query = get(searchTagsState)
    const styleSheets = get(styleSheetsState)
    if (!query.length) return styleSheets
    const compareTags = (tags, query) => query.some(v => tags.includes(v.value))
    const filtered = styleSheets.filter(styleSheet =>
      compareTags(styleSheet.id, query)
    )
    return filtered
  },
})

export const getStylesheet = selectorFamily({
  key: 'getStylesheet',
  get:
    id =>
    ({ get }) => {
      const styleSheets = get(filteredStyleSheetsState)

      return styleSheets.find(el => el.id === id)
    },
})

export const editStylesheet = selectorFamily({
  key: 'editStylesheet',
  set:
    id =>
    ({ set }, newValue) => {
      set(styleSheetsState, state => {
        return state.map(el => (el.id === id ? newValue : el))
      })
    },
})
