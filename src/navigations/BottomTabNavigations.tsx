import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
