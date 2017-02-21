import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MessagesTab from './MessagesTab'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps

const MessagesTabContainer = connect(mapStateToProps)(MessagesTab)

export default MessagesTabContainer;
