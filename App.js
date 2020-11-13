import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faHeart,
  faShoppingBasket,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UserScreen from './app/screens/UserScreen';
import FavoritesScreen from './app/screens/FavoritesScreen';
import ShoppingCartScreen from './app/screens/ShoppingCartScreen';
import RecipeScreen from './app/screens/RecipeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faHome} />,
        }}
      />
      <Tab.Screen
        name='UserScreen'
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faUser} />,
        }}
      />
      <Tab.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faHeart} />,
        }}
      />
      <Tab.Screen
        name='ShoppingCartScreen'
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'Shopping cart',
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faShoppingBasket} />,
        }}
      />
      <Tab.Screen
        name='RecipeScreen'
        component={RecipeScreen}
        options={{
          tabBarLabel: 'Recipies',
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faBookOpen} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

