import errorsReducer, { addError, removeError } from '../../src/modules/errors'

describe('errors reducer', () => {
  it('adds an error', () => {
    const errors = []
    const error = new Error()
    const action = addError(error)
    const reducedErrors = errorsReducer(errors, action)

    expect(reducedErrors.length).toBe(1)
  })

  it('removes an error', () => {
    const error = new Error('specific error')
    const errors = errorsReducer([], addError(error))
    const action = removeError(error)
    const reducedErrors = errorsReducer(errors, action)

    expect(reducedErrors.length).toBe(0)
  })
})
