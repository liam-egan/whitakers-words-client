export const SET = 'whitakers-words/loading/SET'

export default function reducer(state = false, action = {}) {
  const { type, payload } = action

  switch (type) {
    case SET:
      return payload

    default:
      return state
  }
}

export function setLoading(loading = false) {
  return {
    type: SET,
    payload: loading
  }
}
