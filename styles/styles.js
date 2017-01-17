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

  // Auth & Home Screen
  authInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    margin: 10,
    padding: 10,
  },
  authTitle: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
});

module.exports = styles
