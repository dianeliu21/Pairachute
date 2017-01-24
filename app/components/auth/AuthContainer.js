import Login from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions';
import { login } from '../../actions/authActions';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
    authErrorMessage: state.authErrorMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({login}, dispatch);
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default AuthContainer;
