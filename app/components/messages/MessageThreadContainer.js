import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages, sendMessage } from '../../actions/messagesActions';

import MessageThread from './MessageThread'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    focusedThread: state.focusedThread,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMessages,
    sendMessage,
  }, dispatch);
}

const MessagesThreadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageThread)

export default MessagesThreadContainer;
