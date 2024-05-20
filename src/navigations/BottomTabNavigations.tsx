import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen/Home';
import CustomTabBar from './CustomTabBar';
import Search from '../screens/BottomTabScreens/Search';
import Setting from '../screens/BottomTabScreens/Setting';
import Profile from '../screens/BottomTabScreens/Profile';
import DrawerNavigation from './Drawer';

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        ></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      <Tab.Screen name="Setting" component={Setting}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
