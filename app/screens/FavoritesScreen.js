import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FavoritesScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Favorites</Text>
      </View>
      <View style={styles.InputTextContainer}>
        <TextInput
          style={styles.InputText}
          placeholder='Search Recipe'
          placeholderTextColor='black'
        />
        <FontAwesomeIcon icon={faSearch} size={10} />
      </View>

      <View style={styles.ImageContainer}>
        <TouchableOpacity
          onPress={() => alert('image clicked')}
          style={styles.ImageStyle}
        >
          <View styles={styles.Image}>
            <Image
              source={require('../../assets/3FD81FC5-A315-4AF6-9083-F862FB97C07B_4_5005_c.jpeg')}
              style={styles.Image}
            />
            <Text style={styles.ImageText}>Title</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
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

export default FavoritesScreen;
