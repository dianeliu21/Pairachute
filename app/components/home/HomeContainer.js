import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer;
