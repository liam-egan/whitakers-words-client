import { call, select, put, takeLatest } from 'redux-saga/effects'
import { SET as SET_WORD } from '../modules/word'
import { setLoading } from '../modules/loading'
import { setTranslation } from '../modules/translation'
import { addError } from '../modules/errors'
import fetchTranslation from '../util/fetchTranslation'

export default function* translate() {
  yield takeLatest(SET_WORD, updateTranslation)
}

export function* updateTranslation(action) {
  const { payload: word = '' } = action
  const language = yield select(state => state.language)

  yield put(setLoading(true))

  try {
    const translation = yield call(fetchTranslation, word, language)
    yield put(setTranslation(translation))
  } catch (err) {
    yield put(addError(err))
  }

  yield put(setLoading(false))
}
