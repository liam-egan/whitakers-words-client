import wordReducer, { setWord } from '../../src/modules/word'

describe('word reducer', () => {
  it('sets the word if a word is given', () => {
    const originalWord = 'originalWord'
    const newWord = 'newWord'
    const action = setWord(newWord)
    const reducedWord = wordReducer(originalWord, action)

    expect(reducedWord).toBe(newWord)
  })
})
