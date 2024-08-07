import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import Ex1 from '../screens/Ex1';
import RegiHakgua from '../screens/RegiScreen/RegiHakgua';
import RegiCodeConfig from '../screens/RegiScreen/RegiCodeConfig';
import RegiComple from '../screens/RegiScreen/RegiComple';
import RegiEmail from '../screens/RegiScreen/RegiEmail';
import RegiHakbun from '../screens/RegiScreen/RegiHakbun';
import RegiID from '../screens/RegiScreen/RegiID';
import RegiPass from '../screens/RegiScreen/RegiPass';
import RegiName from '../screens/RegiScreen/RegiName';
import Login from '../screens/LoginScreen/Login';
import Main from '../screens/MainScreen/Main';
import BottomTabNavigations from './BottomTabNavigations';
import DrawerNavigation from './Drawer';
import Notice from '../screens/NoticeScreen/Notice';
import Point from '../screens/PointScreen/Point';
import Mimi from '../screens/Mimi';
import DrawerBurgur from '../screens/BottomTabScreens/DrawerBurgur';
import Grade from '../screens/GradeScreens/Grade';
import SelfGraduate from '../screens/SelfGraduateScreens/SelfGraduate';
import AttendanceInquiry from '../screens/AttendanceInquiryScreen/AttendanceInquiry';
import CourseCheck from '../screens/CourseCheckScreen/CourseCheck';
import TuitionInquiry from '../screens/TuitionInquiryScreen/TuitionInquiry';
import ChangePassword from '../screens/ChangePasswordScreen/ChangePassword';
import Schedule from '../screens/ScheduleScreen/Schedule';
import FreeShuttleBus from '../screens/FreeShuttleBusScreen/FreeShuttleBus';

export type RootStackParamList = {
  Ex1: undefined;
  Login: undefined;
  RegiHakgua: undefined;
  RegiCodeConfig: undefined;
  RegiComple: undefined;
  RegiEmail: undefined;
  RegiHakbun: {
    STD_DEC_CD: string;
  };
  RegiID: {STD_DEC_CD: string; STD_NUM: string; NAME: string};
  RegiPass: undefined;
  RegiName: {
    STD_DEC_CD: string;
    STD_NUM: string;
  };
  Main: undefined;
  BottomTabNavigations: undefined;
  DrawerNavigation: undefined;
  Notice: undefined;
  Point: undefined;
  Mimi: undefined;
  DrawerBurgur: undefined;
  Grade: undefined;
  SelfGraduate: undefined;
  AttendanceInquiry: undefined;
  CourseCheck: undefined;
  TuitionInquiry: undefined;
  ChangePassword: undefined;
  Schedule: undefined;
  FreeShuttleBus : undefined;
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegiCodeConfig" component={RegiCodeConfig} />
      <Stack.Screen name="RegiComple" component={RegiComple} />
      <Stack.Screen name="RegiEmail" component={RegiEmail} />
      <Stack.Screen name="RegiName" component={RegiName} />
      <Stack.Screen name="RegiHakbun" component={RegiHakbun} />
      <Stack.Screen name="RegiID" component={RegiID} />
      <Stack.Screen name="RegiPass" component={RegiPass} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Point" component={Point} />
      <Stack.Screen name="CourseCheck" component={CourseCheck} />
      <Stack.Screen
        name="BottomTabNavigations"
        component={BottomTabNavigations}
      />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Mimi" component={Mimi} />
      <Stack.Screen name="DrawerBurgur" component={DrawerBurgur} />
      <Stack.Screen name="Grade" component={Grade} />
      <Stack.Screen name="SelfGraduate" component={SelfGraduate} />
      <Stack.Screen name="AttendanceInquiry" component={AttendanceInquiry} />
      <Stack.Screen name="TuitionInquiry" component={TuitionInquiry} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="FreeShuttleBus"component={FreeShuttleBus}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
