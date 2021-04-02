import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SCREEN from '../Config';
import HomeScreen from '../../Containers/HomeScreen/HomeScreen';
import OrderScreen from '../../Containers/OrderScreen/OrderScreen';
import AccountScreen from '../../Containers/AccountScreen/AccountScreen';
import CreateOrderScreen from '../../Containers/CreateOrderScreen/CreateOrderScreen';
import NotificationScreen from '../../Containers/NotificationScreen/NotificationScreen';

const Tab = createBottomTabNavigator();
export default class MainTabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name={SCREEN.HOME.NAME} 
          component={HomeScreen}
        />
        <Tab.Screen 
          name={SCREEN.ORDER.NAME} 
          component={OrderScreen}
        />
        <Tab.Screen 
          name={SCREEN.CREATEORDER.NAME} 
          component={CreateOrderScreen}
        />
        <Tab.Screen 
          name={SCREEN.ACCOUNT.NAME} 
          component={AccountScreen}
        />
        <Tab.Screen 
          name={SCREEN.NOTIFICATION.NAME} 
          component={NotificationScreen}
        />
      </Tab.Navigator>
    )
  }
}
