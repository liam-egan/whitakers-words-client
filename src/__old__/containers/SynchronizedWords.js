import { connect } from 'react-redux'
import saveNewWords from '../actions/saveNewWords'
import unsaveWords from '../actions/unsaveWords'
import translationRequest from '../actions/translationRequest'
import Words from '../components/Words'

function mapStateToProps(state, ownProps) {
  const { words } = state
  const { inputLanguage } = ownProps
  return {
    words,
    inputLanguage,
    wordsAreSaved: state.savedWords.some(
      saved => saved.words === words && saved.inputLanguage === inputLanguage
    )
  }
}

const mapDispatchToProps = {
  unsaveWords,
  saveWords: saveNewWords,
  updateWords: translationRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words)
