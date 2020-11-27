import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ShoppingCartScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Shopping cart</Text>
      </View>
      <View></View>
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

  navigationBottomBar: {
    flex: 1,
    width: '100%',
    height: 70,
    backgroundColor: 'lightgrey',
  },
});

export default ShoppingCartScreen;
