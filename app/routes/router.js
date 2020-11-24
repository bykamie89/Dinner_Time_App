import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultScreen from '../screens/ResultScreen';
import RecipeDescription from '../screens/RecipeDescription';
import MyTabs from '../routes/BottomButtonNavigator';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        initialRouteName='Home'
        screenOptions={{
          cardStyle: { backgroundColor: 'rgb(248, 248, 248)' },
        }}
      >
        <Stack.Screen name='Home' component={MyTabs} />
        <Stack.Screen name='About' component={ResultScreen} />
        <Stack.Screen name='Description' component={RecipeDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
