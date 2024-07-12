import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {GreenViewBar} from '../../components/AllSrcComponets/AllViewBar';
import {CCDetailBar} from '../../components/CouresewCheckComponents/CourseCheckCompo';

const CourseCheck = () => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo text="수 강 조 회" />
      <View style={{flex: 1}}>
        <GreenViewBar text="2024년도 1학기" />
      </View>

      <CCDetailBar
        titleText="리더쉽"
        detailText="건병하 교수님, 9:30~11:30 이108"
        refinText="교양"
        dateText="날짜"
        stdnumText="학수번호:02650-01"
        gradeText="학년"
        creditText="학점"
        coursetext="수강"></CCDetailBar>

      <View style={{flex: 1, backgroundColor: '#009b6c'}}></View>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}></View>
      <View style={{flex: 1, backgroundColor: '#009b6c'}}></View>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}></View>
      <View style={{flex: 1, backgroundColor: '#009b6c'}}></View>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}></View>
    </AllBackground>
  );
};
export default CourseCheck;
