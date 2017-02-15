import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Tab from './Tab'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps

const TabContainer = connect(mapStateToProps)(Tab)

export default TabContainer;
