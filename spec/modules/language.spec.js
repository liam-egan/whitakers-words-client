import languageReducer, { setLanguage } from '../../src/modules/language'

describe('language reducer', () => {
  it('sets the language', () => {
    const originalLanguage = false
    const newLanguage = false
    const action = setLanguage(newLanguage)
    const reducedLanguage = languageReducer(originalLanguage, action)

    expect(reducedLanguage).toBe(newLanguage)
  })
})
