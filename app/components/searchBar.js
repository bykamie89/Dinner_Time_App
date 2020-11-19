import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.InputTextContainer}>
        <TextInput
          style={styles.InputText}
          placeholder='Search ingredients'
          placeholderTextColor='black'
        />
        <FontAwesomeIcon icon={faSearch} size={10} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  InputTextContainer: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputText: {
    fontSize: 14,
    paddingRight: '20%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
