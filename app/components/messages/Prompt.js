import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import MaterialInitials from 'react-native-material-initials/native';
const styles = require('../../styles/styles.js');

class Prompt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.promptContainer}>
        <View style={styles.promptHeadingContainer}>
          <MaterialInitials backgroundColor={'#FC6150'} color={'white'} size={20} text={"Pairachute"}/>
          <Text style={styles.promptHeading}>Pairachute Prompt</Text>
        </View>
        <Text>{this.props.data.message}</Text>
      </View>
    )
  }
}

module.exports = Prompt;
