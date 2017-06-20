import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    buttonText: "Login",
    headerText: "WELCOME BACK",
    linkPath: '/register',
    linkText: 'Register',
    footerText: "FooterText"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user)), // login user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);