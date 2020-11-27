import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import settings from '../public/settings';

export default class Images extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={getDataUsingAsyncAwaitGetCall}
        style={styles.ImageStyle}
      >
        <View>
          <Image
            source={require('../../assets/3FD81FC5-A315-4AF6-9083-F862FB97C07B_4_5005_c.jpeg')}
            style={styles.Image}
          />
          <Text style={styles.ImageText}>Title</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
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
