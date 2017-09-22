import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { register, clearErrors, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    buttonText: "Continue",
    headerText: "CREATE AN ACCOUNT",
    linkPath: '/login',
    linkText: 'Login',
    footerText: 'Already have an account?',
    errors: state.forms.sessionErrors.join(', '),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(register(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginGuest: (guest) => dispatch(login(guest)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);