/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Main from '../screens/MainScreen/Main';
import CustomTabBar from './CustomTabBar';
import Search from '../screens/BottomTabScreens/Search';
import Setting from '../screens/BottomTabScreens/Setting';
import Profile from '../screens/BottomTabScreens/Profile';
import DrawerNavigation from './Drawer';
import {DrawerActions} from '@react-navigation/native';
import DrawerBurgur from '../screens/BottomTabScreens/DrawerBurgur';
import CourseCheck from '../screens/CourseCheckScreen/CourseCheck';
import Point from '../screens/PointScreen/Point';

const Tab = createBottomTabNavigator();
const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="DrawerBurgur" component={DrawerBurgur} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="CourseChesck" component={CourseCheck} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Point" component={Point} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
