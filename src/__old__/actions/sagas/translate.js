import { call, put, takeLatest } from 'redux-saga/effects'
import { TRANSLATION_REQUEST } from '../translationRequest'
import getTranslation from '../../util/getTranslation'
import translationResponse from '../translationResponse'

export default function* translate() {
  yield takeLatest(TRANSLATION_REQUEST, getTranslationOnTranslationRequest)
}

function* getTranslationOnTranslationRequest(action) {
  const { words, inputLanguage } = action.payload

  try {
    const translation = yield call(getTranslation, {
      words,
      inputLanguage
    })
    yield put(translationResponse(translation))
  } catch (err) {
    yield put(translationResponse(null, err))
  }
}
