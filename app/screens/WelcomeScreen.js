import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';
export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Dinner time</Text>
        </View>
        <SearchBar />
        <View style={styles.ImageContainer}>
          <Images />
          <Images />
          <Images />
          <Images />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  },
  logoText: {
    fontSize: 30,
  },

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
  ImageContainer: {
    height: '70%',
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  ImageStyle: {
    width: '32%',
    height: '33%',
    padding: 5,
  },
  Image: {
    height: '80%',
    width: '100%',
  },
  ImageText: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontSize: 12,
    paddingTop: 5,
  },
});
