/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllViewBarProps {}

/**
 * 출석조회 페이지 -> 출석 현황 상세바
 */
export const DetailBar: React.FC<AllViewBarProps> = ({}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text
        style={[
          AllTextStyles.SemiBold17,
          {marginTop: deviceHeight * 0.02, marginRight: deviceWidth * 0.6},
        ]}>
        데이터 베이스
      </Text>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          marginTop: deviceHeight * 0.015,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.08,
          paddingLeft: deviceWidth * 0.08,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          1주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          2주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          3주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          4주차
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.088,
          paddingRight: deviceWidth * 0.088,
        }}>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
      </View>

      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.08,
          paddingLeft: deviceWidth * 0.08,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          5주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          6주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          7주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          8주차
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.088,
          paddingRight: deviceWidth * 0.088,
        }}>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
      </View>

      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.08,
          paddingLeft: deviceWidth * 0.08,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          9주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          10주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          11주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          12주차
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.088,
          paddingRight: deviceWidth * 0.088,
        }}>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15, {color: '#FF7A00'}]}>지각</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
      </View>

      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.08,
          paddingLeft: deviceWidth * 0.08,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          13주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          14주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          15주차
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#009b64'}]}>
          16주차
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.088,
          paddingRight: deviceWidth * 0.088,
        }}>
        <Text style={[AllTextStyles.SemiBold15, {color: '#FF0000'}]}>결석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15]}>출석</Text>
        <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>출석</Text>
      </View>
    </View>
  );
};
