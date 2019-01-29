import { connect } from 'react-redux'
import Translation from '../components/Translation'

function mapStateToProps(state) {
  return {
    raw: state.translation.raw,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Translation)
