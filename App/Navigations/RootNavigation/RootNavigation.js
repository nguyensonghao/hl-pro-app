import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SCREEN from '../Config';
import MainTabNavigation from '../MainTabNavigation/MainTabNavigation';
import SplashScreen from '../../Containers/SplashScreen/SplashScreen';
import LoginScreen from '../../Containers/LoginScreen/LoginScreen';

const Stack = createStackNavigator();
export default class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN.MAINTAB.NAME}
            component={MainTabNavigation}
            options={{ 
              headerShown: false
            }}
          />
          <Stack.Screen
            name={SCREEN.SPLASH.NAME}
            component={SplashScreen}
            options={{ 
              headerShown: false
            }}
          />                 
          <Stack.Screen
            name={SCREEN.LOGIN.NAME}
            component={LoginScreen}
            options={{ 
              headerShown: false,
              title: SCREEN.LOGIN.TITLE
            }}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
