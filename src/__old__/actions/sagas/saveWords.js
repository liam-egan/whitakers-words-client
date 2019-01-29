import { all, fork, takeEvery, put } from 'redux-saga/effects'
import { SAVED_WORDS_REQUEST } from '../savedWordsRequest'
import { SAVE_NEW_WORDS } from '../saveNewWords'
import { UNSAVE_WORDS } from '../unsaveWords'
import savedWordsResponse from '../savedWordsResponse'

export default function* saveWords() {
  yield all([
    fork(respondToRequest),
    fork(respondToNewWords),
    fork(respondToUnsaveWords)
  ])
}

function* respondToRequest() {
  yield takeEvery(SAVED_WORDS_REQUEST, getSavedWords)
}

function* respondToNewWords() {
  yield takeEvery(SAVE_NEW_WORDS, saveNewWords)
}

function* respondToUnsaveWords() {
  yield takeEvery(UNSAVE_WORDS, unsaveWords)
}

function* getSavedWords() {
  try {
    let savedWords = JSON.parse(localStorage.getItem('savedWords'))

    if (!savedWords) {
      savedWords = []
      localStorage.setItem('savedWords', JSON.stringify(savedWords))
    }

    yield put(savedWordsResponse(savedWords))
  } catch (err) {
    yield put(savedWordsResponse(null, err))
  }
}

function saveNewWords(action) {
  const { words, inputLanguage } = action.payload
  let savedWords = JSON.parse(localStorage.getItem('savedWords'))

  if (!savedWords) {
    savedWords = []
  }

  const newSavedWords = savedWords.concat({ words, inputLanguage })
  localStorage.setItem('savedWords', JSON.stringify(newSavedWords))
}

function unsaveWords(action) {
  const { words, inputLanguage } = action.payload
  let savedWords = JSON.parse(localStorage.getItem('savedWords'))

  if (!savedWords) {
    savedWords = []
  }

  const index = savedWords.findIndex(
    saved => saved.words === words && saved.inputLanguage === inputLanguage
  )

  const newSavedWords = savedWords.filter((e, i) => i !== index)
  localStorage.setItem('savedWords', JSON.stringify(newSavedWords))
}
