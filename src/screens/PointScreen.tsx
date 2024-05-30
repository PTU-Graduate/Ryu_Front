import {View, Text} from 'react-native';
import React from 'react';
import AllTextStyles from '../styles/AllSrcStyles/AllTextStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {deviceHeight, deviceWidth} from '../utils/DeviceUtils';
import {AllTitleTopBarCompo} from '../components/homeSrcCompo/TopBarCompo';
const PointScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="i + 솔선수범 포인트" />
      </View>
      <View style={{flex: 2}}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {
              color: '#009b64',
              marginLeft: deviceWidth * 0.05,
              lineHeight: deviceHeight * 0.03,
            },
          ]}>
          2024년 1학기
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {
              color: '#000000',
              marginLeft: deviceWidth * 0.05,
              lineHeight: deviceHeight * 0.03,
            },
          ]}>
          포인트 목록
        </Text>
        <View
          style={{
            height: deviceHeight * 0.15,
            backgroundColor: '#009b64',
            width: deviceWidth * 0.9,
            marginLeft: deviceWidth * 0.05,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.05,
                lineHeight: deviceHeight * 0.03,
              },
            ]}>
            2024년 1학기 총 포인트
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.05,
              },
            ]}>
            25,000P
          </Text>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: '#789'}}></View>
      <View style={{flex: 3, backgroundColor: '#CDCDCD'}}></View>
    </SafeAreaView>
  );
};
export default PointScreen;
