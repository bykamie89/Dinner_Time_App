import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';

export default class searchBar extends PureComponent {
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
