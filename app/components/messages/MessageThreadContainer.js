import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadThread } from '../../actions/messagesActions';

import MessageThread from './MessageThread'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    focusedMessageThread: state.focusedMessageThread,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

const MessagesThreadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesThread)

export default MessagesThreadContainer;
