import translationReducer, {
  setTranslation
} from '../../src/modules/translation'

describe('translation reducer', () => {
  it('sets the translation', () => {
    const originalTranslation = { raw: 'original' }
    const newTranslation = { raw: 'new' }
    const action = setTranslation(newTranslation)
    const reducedTranslation = translationReducer(originalTranslation, action)

    expect(reducedTranslation).toBe(newTranslation)
  })
})
