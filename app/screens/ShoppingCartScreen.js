import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

function ShoppingCartScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Shopping cart</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox title='Chicken' />
        <CheckBox title='Rice' />
        <CheckBox title='Coconut milk' />
        <CheckBox title='Curry' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logoContainer: {
    position: 'absolute',
    top: 105,
    alignItems: 'center',
    width: '80%',
  },
  logoText: {
    fontStyle: 'normal',
    fontSize: 30,
    paddingBottom: 30,
  },

  checkBoxContainer: {
    height: '75%',
    width: '90%',
  },
});

export default ShoppingCartScreen;
