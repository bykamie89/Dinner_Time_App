import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';

export default class searchBar extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CardView cardElevation={7} cardMaxElevation={7} style={styles.searchBar}>
        <TextInput {...this.props} style={styles.searchText} />
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 1,
    marginRight: 15,
    width: 300,
  },
  searchText: {
    color: 'black',
    marginLeft: 15,
  },
});
