import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';

export default class earchBar extends PureComponent {
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
    borderColor: '#C9C9C9',
    borderWidth: 1,
    marginRight: 15,
    width: 350,
  },
  searchText: {
    color: '#808080',
    marginLeft: 15,
  },
});
