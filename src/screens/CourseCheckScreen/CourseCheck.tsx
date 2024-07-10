import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

const CourseCheck = () => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo text="수강조회" />
      <View
        style={{
          flex: 1,
          marginLeft: deviceWidth * 0.05,
          marginRight: deviceWidth * 0.05,
          marginBottom: deviceHeight * 0.1,
          backgroundColor: '#49b08c',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold20,
            {
              color: '#ffffff',
              alignContent: 'center',
              justifyContent: 'center',
              marginTop: deviceHeight * 0.03,
              marginLeft: deviceWidth * 0.06,
              fontSize: 20,
            },
          ]}>
          2024년도 1학기
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text
          style={[
            AllTextStyles.SemiBold17,
            {marginLeft: deviceWidth * 0.05, marginBottom: deviceWidth * 0.12},
          ]}>
          리더쉽{' '}
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
