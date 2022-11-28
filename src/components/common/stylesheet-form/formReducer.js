import { decodeBase64 } from '../../../utils/base64'

export const INITIAL_STATE = {
  isLoading: false,
  error: false,
  code: '',
  name: [],
}

export const formReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_INITIAL_STATE': {
      const code = decodeBase64(payload.code)
      const name = payload.name

      return {
        ...state,
        code,
        name,
      }
    }
    case 'CHANGE_INPUT':
      return {
        ...state,
        [payload.name]: payload.value,
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
