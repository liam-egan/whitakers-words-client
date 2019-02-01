export const SET = 'whitakers-words/translation/SET'

export default function reducer(state = {}, action = {}) {
  const { type, payload } = action

  switch (type) {
    case SET:
      return payload

    default:
      return state
  }
}

export function setTranslation(translation = {}) {
  return {
    type: SET,
    payload: translation
  }
}
