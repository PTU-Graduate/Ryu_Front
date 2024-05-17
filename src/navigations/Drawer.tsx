// DrawerNavigation.js

import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../screens/BottomTabScreens/DrawerBurgur';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('호출 됌');

  return (
    <Drawer.Navigator screenOptions={{drawerPosition: 'left'}}>
      <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
