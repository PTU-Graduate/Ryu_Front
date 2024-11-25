import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
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
import {getUserData} from '../utils/DataTableSet/LoginResultData';
import {deviceWidth} from '../utils/DeviceUtils';

const Drawer = createDrawerNavigator();

// 사용자 정보 헤더 컴포넌트
const DrawerHeader = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [departName, setDepartName] = useState<string>('');
  const [std_num, setStd_Num] = useState<string>('');
  useEffect(() => {
    const userData = getUserData();
    if (userData !== null) {
      setEmail(userData.EMAIL);
      setName(userData.NAME);
      setDepartName(userData.DEPARTMENT_NAME);
      setStd_Num(userData.STD_NUM);
    }
  }, []);

  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/images/profile.jpeg')}
        style={styles.profileImage}
      />
      <View style={{width: '100%'}}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
        <Text style={styles.userEmail}>{departName}</Text>
        <Text style={styles.userEmail}>{std_num}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

// 커스텀 Drawer 내용
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* 사용자 헤더 */}
      <DrawerHeader />
      {/* 네비게이션 항목 */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <Drawer.Screen name="홈" component={BottomTabNavigator} />
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

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: deviceWidth * 0.25,
    height: deviceWidth * 0.25,
    borderRadius: 40,
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default DrawerNavigation;
