import { connect } from 'react-redux'
import translationRequest from '../actions/translationRequest'
import WordsInput from '../components/WordsInput'

function mapStateToProps(state) {
  return {
    currentWords: state.words
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateWords: words =>
      dispatch(translationRequest(words, ownProps.inputLanguage))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordsInput)
