import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import RecipesSearched from '../components/recipesSearched';
import settings from '../public/settings';

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      recipes: [],
      isLoading: true,
    };

    this._renderItem = this._renderItem.bind(this);
  }

  async getRecipes() {
    const { ingredients } = this.props.route.params;
    try {
      const req = await fetch(
        `${settings.URL}search?query=${ingredients}&number=10&instructionsRequired=true&apiKey=${settings.API_KEY}`
      );
      const result = await req.json();
      for (let items of result.results) {
        this.state.recipes.push(items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  _renderItem({ item, index }) {
    return (
      <RecipesSearched
        title={item.title}
        source={{ uri: `https://spoonacular.com/recipeImages/${item.image}` }}
        ready={item.readyInMinutes}
        servings={item.servings}
        onPress={() =>
          this.props.navigation.navigate('Description', {
            id: item.id,
            title: item.title,
            servings: item.servings,
            readyInMinutes: item.readyInMinutes,
            img: item.image,
          })
        }
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/B77EAB1F-1B4E-4BCF-B976-B1EAA0E4FB07_4_5005_c.jpeg')}
          />
          <Text style={styles.logoText}>Recipes that matches your search</Text>
        </View>
        <View style={styles.ImageContainer}>
          {this.state.isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              data={this.state.recipes}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  logoContainer: {
    height: 250,
    width: '100%',
    top: 60,
    marginTop: -30,
  },
  img: {
    flex: 0.7,
    width: null,
    height: null,
  },
  logoText: {
    flex: 0.3,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  ImageContainer: {
    height: '70%',
    width: 410,
    alignItems: 'center',
    padding: 5,
  },
});
