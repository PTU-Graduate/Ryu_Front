import {View, Text} from 'react-native';
import React from 'react';
import AllTextStyles from '../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../utils/DeviceUtils';
import {AllTitleTopBarCompo} from '../components/MainSrcCompo/TopBarCompo';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';

const PointScreen = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="i + 솔선수범 포인트 조회" />
      </View>
      <View style={{flex: 2}}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {
              color: '#009b64',
              marginLeft: deviceWidth * 0.055,
              lineHeight: deviceHeight * 0.04,
            },
          ]}>
          2024년 1학기
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold14,
            {
              color: '#000000',
              marginLeft: deviceWidth * 0.055,
            },
          ]}>
          포인트 목록
        </Text>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.15,
            backgroundColor: '#49B08C',
            borderRadius: 10,
            marginLeft: deviceWidth * 0.05,
            marginTop: deviceHeight * 0.012,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold13,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.05,
                marginBottom: deviceWidth * 0.015,
              },
            ]}>
            포인트 합계
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold19,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.05,
              },
            ]}>
            25,000 P
          </Text>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: '#789'}}></View>
      <View style={{flex: 3, backgroundColor: '#CDCDCD'}}></View>
    </AllBackground>
  );
};
export default PointScreen;
