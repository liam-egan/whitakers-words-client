import savedWordsReducer, {
  saveWord,
  unsaveWord
} from '../../src/modules/savedWords'
import { LATIN, ENGLISH } from '../../src/constants/languages'

describe('savedWords reducer', () => {
  it('saves a word if given a new word', () => {
    const savedWords = []
    const newWord = 'newWord'
    const action = saveWord(newWord, LATIN)
    const reducedSavedWords = savedWordsReducer(savedWords, action)

    expect(reducedSavedWords.length).toBe(1)
  })

  it('unsaves a word', () => {
    const savedWords = savedWordsReducer([], saveWord('savedWord', LATIN))
    const savedWord = 'savedWord'
    const action = unsaveWord(savedWord, LATIN)
    const reducedSavedWords = savedWordsReducer(savedWords, action)

    expect(reducedSavedWords.length).toBe(0)
  })

  it('does not unsave a word if there is a saved word with a different language', () => {
    const savedWords = savedWordsReducer([], saveWord('savedWord', LATIN))
    const savedWord = 'savedWord'
    const action = unsaveWord(savedWord, ENGLISH)
    const reducedSavedWords = savedWordsReducer(savedWords, action)

    expect(reducedSavedWords.length).toBe(1)
  })
})
