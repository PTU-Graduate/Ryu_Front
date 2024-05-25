// DrawerNavigation.js

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerBurgur from '../screens/BottomTabScreens/DrawerBurgur';
import BottomTabNavigator from './BottomTabNavigations';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('호출 됌');

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
