import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    buttonText: "Login",
    headerText: "WELCOME BACK",
    linkPath: '/register',
    linkText: 'Register',
    footerText: 'Need an account?',
    errors: state.forms.sessionErrors.join(', '),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user)), 
    clearErrors: () => dispatch(clearErrors()),
    loginGuest: (guest) => dispatch(login(guest)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)