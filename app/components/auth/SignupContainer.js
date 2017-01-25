import Signup from './Signup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signup}, dispatch);
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup)

export default SignupContainer;
