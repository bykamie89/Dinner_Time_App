import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import settings from '../public/settings';

export default class Images extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getDataUsingAsyncAwaitGetCall = async () => {
      try {
        const response = await axios.get(
          `${settings.URL}visualizeRecipe/&apiKey=${settings.API_KEY}`
        );
        alert(JSON.stringify(response.data));
      } catch (error) {
        // handle error
        alert(error.message);
      }
    };
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <View style={{ width: 200, height: 150 }}>
          <Image
            style={styles.img}
            resizeMode='contain'
            source={this.props.source}
          />
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginLeft: 24,
            }}
          >
            <Text style={styles.subtitle}>Ready in: </Text>
            <Text style={styles.answer}>{this.props.ready} minutes.</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 24,
            }}
          >
            <Text style={styles.subtitle}>servings: </Text>
            <Text style={styles.answer}>{this.props.servings}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  ImageStyle: {
    width: '33%',
    height: '100%',
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
