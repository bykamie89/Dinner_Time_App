import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import settings from '../public/settings';
import RecipesSearched from '../components/recipesSearched';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchValue: '',
      recipes: [],
      isLoading: true,
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _handleSubmitEditing() {
    let words = this.state.searchValue.replace(/ +/g, ',');
    this.props.navigation.navigate('About', { ingredients: words });
  }

  async getRecipes() {
    try {
      const req = await fetch(
        `${settings.URL}search?query=dinner&number=20&instructionsRequired=true&apiKey=${settings.API_KEY}`
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
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Dinner time</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <SearchBar
            onChangeText={(text) => this.setState({ searchValue: text })}
            placeholder='Search for recipies'
            placeholderTextColor='black'
            blurOnSubmit={true}
            onSubmitEditing={() => this._handleSubmitEditing()}
          />
        </View>
        <View style={styles.ImageContainer}>
          <FlatList
            directionalLockEnabled={true}
            data={this.state.recipes}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
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
    top: 40,
  },
  logoText: {
    fontSize: 30,
  },
  ImageContainer: {
    height: '70%',
    width: 410,
    alignItems: 'center',
    padding: 5,
  },
});
