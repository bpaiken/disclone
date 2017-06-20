import {connect} from 'react-redux';
import Logout from './logout_test.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);