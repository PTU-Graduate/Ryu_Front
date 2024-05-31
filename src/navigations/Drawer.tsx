// DrawerNavigation.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerBurgur from '../screens/BottomTabScreens/DrawerBurgur';
import BottomTabNavigator from './BottomTabNavigations';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('호출 됨');

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
