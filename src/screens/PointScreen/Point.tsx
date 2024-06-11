import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

const Point = () => {
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
      <View style={{flex: 2}}>
        <Text
          style={[
            AllTextStyles.SemiBold19,
            {marginLeft: deviceWidth * 0.05, marginTop: deviceHeight * 0.04},
          ]}>
          한 눈에 보는 인출 가능한 포인트 내역 조회
        </Text>
        <View
          style={{
            backgroundColor: '#BCD5AC',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.08,
            borderRadius: 10,
            marginLeft: deviceWidth * 0.05,
            marginTop: deviceHeight * 0.012,
            justifyContent: 'center',
          }}></View>
        <Text
          style={[
            AllTextStyles.SemiBold13,
            {marginLeft: deviceWidth * 0.13, marginTop: deviceHeight * 0.02},
          ]}>
          이번 학기에 모은 포인트 금액
        </Text>
        <Text
          style={[AllTextStyles.SemiBold13, {marginLeft: deviceWidth * 0.13}]}>
          인출 가능한 솔선수번 포인트 최소 금액
        </Text>
      </View>
      <View style={{flex: 3}}>
        <Text
          style={[
            AllTextStyles.SemiBold19,
            {margin: deviceWidth * 0.05, marginTop: deviceHeight * 0.02},
          ]}>
          솔선수범 관련 공지
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#D9D9D9',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.1,
            borderRadius: 10,
            marginLeft: deviceWidth * 0.05,
            marginTop: deviceHeight * 0.012,
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>
    </AllBackground>
  );
};
export default Point;
