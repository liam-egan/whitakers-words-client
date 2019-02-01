import isEqual from 'lodash/isEqual'
import { LATIN } from '../constants/languages'

export const SAVE = 'whitakers-words/savedWords/SAVE'
export const UNSAVE = 'whitakers-words/savedWords/UNSAVE'

export default function reducer(state = [], action = {}) {
  const { type, payload } = action

  switch (type) {
    case SAVE:
      return [...state, payload]

    case UNSAVE:
      return state.filter(word => !isEqual(word, payload))

    default:
      return state
  }
}

export function saveWord(word = '', language = LATIN) {
  return {
    type: SAVE,
    payload: {
      word,
      language
    }
  }
}

export function unsaveWord(word = '', language = LATIN) {
  return {
    type: UNSAVE,
    payload: {
      word,
      language
    }
  }
}
