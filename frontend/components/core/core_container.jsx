import {connect} from 'react-redux'
import {fetchServer} from '../../actions/server_actions.js';
import Core from './core'

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Core);