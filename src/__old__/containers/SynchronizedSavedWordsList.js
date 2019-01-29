import { connect } from 'react-redux'
import translationRequest from '../actions/translationRequest'
import SavedWordsList from '../components/SavedWordsList'

function mapStateToProps(state) {
  return {
    savedWords: state.savedWords
  }
}

const mapDispatchToProps = {
  updateWords: translationRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedWordsList)
