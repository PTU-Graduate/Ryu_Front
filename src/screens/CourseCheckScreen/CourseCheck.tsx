import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {GreenViewBar} from '../../components/AllSrcComponets/AllViewBar';

const CourseCheck = () => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo text="수 강 조 회" />
      <View style={{flex: 1}}>
        <GreenViewBar text="2024년도 1학기" />
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text
          style={[
            AllTextStyles.SemiBold17,
            {marginLeft: deviceWidth * 0.05, marginBottom: deviceWidth * 0.12},
          ]}>
          리더쉽
          <Text style={[AllTextStyles.SemiThin15, {}]}>
            건병하 교수님, 9:30~11:30,이108
          </Text>
        </Text>
      </View>
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
