import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { register } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    buttonText: "Continue",
    headerText: "CREATE AN ACCOUNT",
    linkPath: '/login',
    linkText: 'Login',
    footerText: 'Already have an account?'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(register(user)), // sign up user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);