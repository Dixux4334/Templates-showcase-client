import { selector } from 'recoil'
import { templatesState } from './templatesState'

export const allTagsState = selector({
  key: 'allTags',
  get: ({ get }) => {
    const templates = get(templatesState)
    const allTags = templates.map(template => template.tags)
    const allTagsCleaned = [...new Set(allTags.flat())]
    const res = allTagsCleaned.map(tag => ({ value: tag, label: tag }))

    return res
  },
})
