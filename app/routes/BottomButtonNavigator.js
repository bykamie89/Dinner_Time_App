import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createStackNavigator } from '@react-navigation/stack';
import {
  faHome,
  faUser,
  faHeart,
  faShoppingBasket,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserScreen from '../screens/UserScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='Home'
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='UserScreen'
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHeart} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='ShoppingCartScreen'
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'Shopping cart',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faShoppingBasket} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='RecipeScreen'
        component={RecipeScreen}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBookOpen} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
