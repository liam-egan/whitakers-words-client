export const SET = 'whitakers-words/word/SET'

export default function reducer(state = '', action = {}) {
  const { type, payload } = action

  switch (type) {
    case SET:
      return payload

    default:
      return state
  }
}

export function setWord(word = '') {
  return {
    type: SET,
    payload: word
  }
}
