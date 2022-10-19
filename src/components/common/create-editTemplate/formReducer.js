import { decodeBase64 } from '../../../utils/base64'

export const INITIAL_STATE = {
  isLoading: false,
  error: false,
  languages: {
    html: '',
    scss: '',
    js: '',
  },
  tags: [],
  finalTags: [],
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_STATE': {
      const languages = {
        html: decodeBase64(
          action.payload.languages.find(el => el.name === 'html').code
        ),
        scss: decodeBase64(
          action.payload.languages.find(el => el.name === 'scss').code
        ),
        js: decodeBase64(
          action.payload.languages.find(el => el.name === 'js').code
        ),
      }

      const tags = action.payload.tags.map(tag => ({ value: tag, label: tag }))

      return {
        ...state,
        languages,
        tags,
        finalTags: action.payload.tags,
      }
    }
    case 'SET_TAGS': {
      const finalTags = action.payload.map(tag => tag.value)
      return {
        ...state,
        tags: action.payload,
        finalTags,
      }
    }
    case 'CHANGE_INPUT':
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.name]: action.payload.value,
        },
      }
    case 'FETCH_START':
      return {
        isLoading: true,
        ...state,
      }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        error: false,
        languages: {
          html: '',
          scss: '',
          js: '',
        },
        tags: [],
      }
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        error: true,
        ...state,
      }
    default:
      return state
  }
}
