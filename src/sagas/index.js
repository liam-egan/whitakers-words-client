import { all, fork } from 'redux-saga/effects'
import translate from './translate'

export default function* root() {
  yield all([fork(translate)])
}
