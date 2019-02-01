export const ADD = 'whitakers-words/errors/ADD'
export const REMOVE = 'whitakers-words/errors/REMOVE'

export default function reduce(state = [], action = {}) {
  const { type, payload } = action

  switch (type) {
    case ADD:
      return [...state, payload]

    case REMOVE:
      return state.filter(error => error !== payload)

    default:
      return state
  }
}

export function addError(error = new Error()) {
  return {
    type: ADD,
    payload: error
  }
}

export function removeError(error = new Error()) {
  return {
    type: REMOVE,
    payload: error
  }
}
