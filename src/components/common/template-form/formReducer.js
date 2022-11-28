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
  stylesheets: [],
}

export const formReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_INITIAL_STATE': {
      const languages = {
        html: decodeBase64(
          payload.languages.find(el => el.name === 'html').code
        ),
        scss: decodeBase64(
          payload.languages.find(el => el.name === 'scss').code
        ),
        js: decodeBase64(payload.languages.find(el => el.name === 'js').code),
      }
      const tags = payload.tags.map(tag => ({ value: tag, label: tag }))
      const stylesheets = payload.stylesheets
        ? payload.stylesheets.map(stylesheet => ({
            value: stylesheet.value,
            label: stylesheet.label,
          }))
        : []

      return {
        ...state,
        languages,
        tags,
        stylesheets,
      }
    }
    case 'SET_STYLESHEETS':
      return {
        ...state,
        stylesheets: payload,
      }
    case 'SET_TAGS':
      return {
        ...state,
        tags: payload,
      }
    case 'CHANGE_INPUT':
      return {
        ...state,
        languages: {
          ...state.languages,
          [payload.name]: payload.value,
        },
      }
    case 'FETCH_START':
      return {
        isLoading: true,
        ...state,
      }
    case 'FETCH_SUCCESS':
      return INITIAL_STATE
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
