import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

export default class RecipesSearched extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.resultBox}
        activeOpacity={1}
        onPress={this.props.onPress}
      >
        <Image style={styles.img} source={this.props.source} />
        <View style={styles.TextStyle}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>Ready in: </Text>
          <Text style={styles.answer}>{this.props.ready} minutes.</Text>
          <Text style={styles.subtitle}>servings: </Text>
          <Text style={styles.answer}>{this.props.servings}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  resultBox: {
    width: '90%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    marginLeft: -20,
  },
  img: {
    flex: 0.5,
    width: null,
    height: null,
    resizeMode: 'center',
  },
  TextStyle: {
    flex: 0.5,
    marginLeft: 30,
    fontSize: 16,
    alignSelf: 'center',
  },
});
