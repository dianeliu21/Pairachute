const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  wrapper: {
    flex: 1,
  },

  // Login/Signup and Auth
  authErrorText: {
    color: 'red',
    textAlign: 'center',
    margin: 10
  },
  authInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    margin: 10,
    padding: 10,
  },
  authInputCorrect: {
    borderColor: 'green',
    borderWidth: 2,
  },
  authInputIncorrect: {
    borderColor: 'red',
    borderWidth: 2,
  },
  authTitle: {
    fontSize: 40,
    textAlign: 'center',
  },


  // TabBar Styles
  tabBar: {
    backgroundColor: 'white',
    borderColor: '#b7b7b7',
    borderWidth: 0.5,
    opacity: 1,
  },

  ///////////////
  // Messaging //
  ///////////////

  // Message Bubble
  messageBubbleWrapper: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  messageBubble: {
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft:10,
    paddingRight:10,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F0F0',
    marginRight: 100,
  },
  receivedMessageName: {
    alignSelf: 'flex-start',
    color: 'gray',
    fontSize: 10,
    marginBottom: 2,
    marginLeft: 10,
  },
  receivedMessageText: {
    color: 'black',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084FF',
    marginLeft: 100,
  },
  sentMessageText: {
    color: 'white',
    textAlign: 'right',
  },
  messageInputView: {
    borderColor: 'gray',
    borderWidth: 0.5,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  messageTextInput: {
    fontSize: 15,
    minHeight: 30,
    padding: 5,
    paddingLeft: 10,
    width: 300,
  },
  messageSend: {

  },
});

module.exports = styles
