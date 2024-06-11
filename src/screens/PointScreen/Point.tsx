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
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {
              color: '#009b64',
              marginRight: deviceWidth * 0.575,
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
              marginRight: deviceWidth * 0.655,
              marginBottom: deviceHeight * 0.008,
            },
          ]}>
          포인트 목록
        </Text>
        <View
          style={{
            width: deviceWidth * 0.85,
            height: deviceHeight * 0.15,
            backgroundColor: '#49B08C',
            borderRadius: 10,
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
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text
          style={[
            AllTextStyles.SemiBold14,
            {marginRight: deviceWidth * 0.215},
          ]}>
          한 눈에 보는 인출 가능한 포인트 내역 조회
        </Text>
        <View
          style={{
            backgroundColor: '#D9D9D9',
            width: deviceWidth * 0.85,
            height: deviceHeight * 0.08,
            borderRadius: 10,
            marginTop: deviceHeight * 0.012,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {color: '#717171', marginLeft: deviceWidth * 0.4, zIndex: 1},
            ]}>
            50 %
          </Text>
          <View
            style={{
              backgroundColor: '#BCD5AC',
              width: deviceWidth * 0.425,
              height: deviceHeight * 0.08,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: deviceWidth * 0.03,
              height: deviceHeight * 0.016,
              backgroundColor: '#BCD5AC',
              borderRadius: 50,
              marginRight: deviceWidth * 0.05,
              marginTop: deviceHeight * 0.02,
            }}></View>
          <Text
            style={[
              AllTextStyles.SemiBold12,
              {marginRight: deviceWidth * 0.39, marginTop: deviceHeight * 0.02},
            ]}>
            이번 학기에 모은 포인트 금액
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: deviceWidth * 0.03,
              height: deviceHeight * 0.016,
              backgroundColor: '#D9D9D9',
              borderRadius: 50,
              marginRight: deviceWidth * 0.05,
              marginTop: deviceHeight * 0.02,
            }}></View>
          <Text
            style={[
              AllTextStyles.SemiBold12,
              {
                marginRight: deviceWidth * 0.28,
                marginTop: deviceHeight * 0.015,
              },
            ]}>
            인출가능한 솔선수범 포인트 최소 금액
          </Text>
        </View>
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            borderBottomColor: '#C9C6C6',
            borderBottomWidth: 1,
            marginTop: deviceHeight * 0.05,
          }}></View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={[
              AllTextStyles.SemiBold14,
              {
                marginTop: deviceHeight * 0.04,
                marginRight: deviceWidth * 0.565,
                marginBottom: deviceHeight * 0.015,
              },
            ]}>
            솔선수범 관련 공지
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#D9D9D9',
              width: deviceWidth * 0.85,
              height: deviceHeight * 0.1,
              borderRadius: 10,
              justifyContent: 'center',
            }}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: deviceWidth * 0.011,
                height: deviceHeight * 0.006,
                backgroundColor: '#FF0000',
                borderRadius: 50,
                marginRight: deviceWidth * 0.02,
                marginTop: deviceHeight * 0.029,
              }}></View>
            <Text
              style={[
                AllTextStyles.SemiBold10,
                {
                  color: '#ff0000',
                  marginTop: deviceHeight * 0.025,
                  marginRight: deviceWidth * 0.18,
                },
              ]}>
              100% 도달 시 학기가 끝날때마다 꼭 신청하시길 바랍니다.
            </Text>
          </View>
        </View>
      </View>
    </AllBackground>
  );
};
export default Point;
