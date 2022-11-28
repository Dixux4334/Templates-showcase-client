import { selector, selectorFamily } from 'recoil'
import { searchTagsState } from './searchTagsSate'
import { templatesState } from './templatesState'

export const filteredTemplatesState = selector({
  key: 'FilteredTemplates',
  get: ({ get }) => {
    const query = get(searchTagsState)
    const templates = get(templatesState)
    if (!query.length) return templates
    const compareTags = (tags, query) => query.some(v => tags.includes(v.value))
    const filtered = templates.filter(template =>
      compareTags(template.tags, query)
    )
    return filtered
  },
})

export const getTemplate = selectorFamily({
  key: 'getTemplate',
  get:
    id =>
    ({ get }) => {
      const templates = get(filteredTemplatesState)

      return templates.find(el => el.id === id)
    },
})

export const editTemplate = selectorFamily({
  key: 'editTemplate',
  set:
    id =>
    ({ set }, newValue) => {
      set(templatesState, state => {
        return state.map(el => (el.id === id ? newValue : el))
      })
    },
})
