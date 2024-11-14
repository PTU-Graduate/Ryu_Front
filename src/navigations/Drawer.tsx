// DrawerNavigation.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerBurgur from '../screens/BottomTabScreens/DrawerBurgur';
import BottomTabNavigator from './BottomTabNavigations';
import Profile from '../screens/BottomTabScreens/Profile';
import SelfGraduate from '../screens/SelfGraduateScreens/SelfGraduate';
import Notice from '../screens/NoticeScreen/Notice';
import TuitionInquiry from '../screens/TuitionInquiryScreen/TuitionInquiry';
import Point from '../screens/PointScreen/Point';
import Schedule from '../screens/ScheduleScreen/Schedule';
import CourseCheck from '../screens/CourseCheckScreen/CourseCheck';
import Grade from '../screens/GradeScreens/Grade';
import AttendanceInquiry from '../screens/AttendanceInquiryScreen/AttendanceInquiry';
import FreeShuttleBus from '../screens/FreeShuttleBusScreen/FreeShuttleBus';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('호출 됨');

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <Drawer.Screen name="main" component={BottomTabNavigator} />
      <Drawer.Screen name="학생정보" component={Profile} />
      <Drawer.Screen name="수강조회" component={CourseCheck} />
      <Drawer.Screen name="출석조회" component={AttendanceInquiry} />
      <Drawer.Screen name="성적조회" component={Grade} />
      <Drawer.Screen name="등록금납부" component={TuitionInquiry} />
      <Drawer.Screen name="셔틀버스" component={FreeShuttleBus} />
      <Drawer.Screen name="졸업자가진단" component={SelfGraduate} />
      <Drawer.Screen name="솔선수범포인트" component={Point} />
      <Drawer.Screen name="공지사항" component={Notice} />
      <Drawer.Screen name="학사일정" component={Schedule} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
