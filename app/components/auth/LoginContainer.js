import Login from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({login}, dispatch);
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default LoginContainer;
