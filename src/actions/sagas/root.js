import { all, fork } from 'redux-saga/effects'
import translate from './translate'
import saveWords from './saveWords'

export default function* root() {
  yield all([fork(translate), fork(saveWords)])
}
