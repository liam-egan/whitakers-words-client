import { LATIN } from '../constants/languages'

export const SET = 'whitakers-words/language/SET'

export default function reducer(state = LATIN, action = {}) {
  const { type, payload } = action

  switch (type) {
    case SET:
      return payload

    default:
      return state
  }
}

export function setLanguage(language = LATIN) {
  return {
    type: SET,
    payload: language
  }
}
