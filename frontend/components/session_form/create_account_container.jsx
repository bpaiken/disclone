import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { createAccount } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    buttonText: "Sign Up",
    headerText: "Create an Account"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(createAccount(user)), // sign up user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);