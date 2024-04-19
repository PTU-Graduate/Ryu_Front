import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import Ex1 from '../screens/Ex1';
import Ex2 from '../screens/Ex2';
import LoginScreen from '../screens/LoginScreen';
import RegiHakgua from '../screens/RegiScreen/RegiHakgua';
import RegiCodeConfig from '../screens/RegiScreen/RegiCodeConfig';
import RegiComple from '../screens/RegiScreen/RegiComple';
import RegiEmail from '../screens/RegiScreen/RegiEmail';
import RegiHakbun from '../screens/RegiScreen/RegiHakbun';
import RegiID from '../screens/RegiScreen/RegiID';
import RegiPass from '../screens/RegiScreen/RegiPass';
import RegiName from '../screens/RegiScreen/RegiName';
import Home from '../screens/homeScreen/Home';

type RootStackParamList = {
  Ex1: undefined;
  Ex2: undefined;
  LoginScreen: undefined;
  RegiHakgua: undefined;
  RegiCodeConfig: undefined;
  RegiComple: undefined;
  RegiEmail: undefined;
  RegiHakbun: undefined;
  RegiID: undefined;
  RegiPass: undefined;
  RegiName: undefined;
  Home: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Ex1'>;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Ex1" component={Ex1} />
      <Stack.Screen name="RegiHakgua" component={RegiHakgua} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegiCodeConfig" component={RegiCodeConfig} />
      <Stack.Screen name="RegiComple" component={RegiComple} />
      <Stack.Screen name="RegiEmail" component={RegiEmail} />
      <Stack.Screen name="RegiName" component={RegiName} />
      <Stack.Screen name="RegiHakbun" component={RegiHakbun} />
      <Stack.Screen name="RegiID" component={RegiID} />
      <Stack.Screen name="RegiPass" component={RegiPass} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ex2" component={Ex2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
