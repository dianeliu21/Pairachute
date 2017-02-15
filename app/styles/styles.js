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

});

module.exports = styles
