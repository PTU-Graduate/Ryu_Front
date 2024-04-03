import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import Ex1 from '../screens/Ex1';
import Ex2 from '../screens/Ex2';

type RootStackParamList = {
  Ex1: undefined;
  Ex2: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Ex1'>;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Ex1" component={Ex1} />
      <Stack.Screen name="Ex2" component={Ex2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
