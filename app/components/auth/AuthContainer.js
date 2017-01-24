import Login from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default AuthContainer;
