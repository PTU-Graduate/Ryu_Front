/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllViewBarProps {
  text?: string;
  titletext1?: string;
  titletext2?: string;
  titletext3?: string;
  titletext4?: string;
  detailtext1?: string;
  detailtext2?: string;
  detailtext3?: string;
  detailtext4?: string;
}

/**
 * 조회기능에 들어가는 상세내용 초록색&연두색 제목바
 */
export const GreenViewBar: React.FC<AllViewBarProps> = ({text}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.065,
            },
          ]}>
          {text}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceHeight * 0.05,
          marginRight: deviceWidth * 0.87,
        }}></View>
    </View>
  );
};

/**
 * 조회기능에 들어가는 상세내용 초록색 내용바
 */
export const GreenRoundBar: React.FC<AllViewBarProps> = ({
  titletext1,
  titletext2,
  titletext3,
  titletext4,
  detailtext1,
  detailtext2,
  detailtext3,
  detailtext4,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          marginTop: deviceHeight * 0.035,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.06,
          paddingLeft: deviceWidth * 0.06,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext1}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext2}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext3}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext4}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 0.3,
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.091,
          paddingRight: deviceWidth * 0.043,
          paddingTop: deviceHeight * 0.005,
        }}>
        <Text style={[AllTextStyles.SemiBold15, {color: '#000000'}]}>
          {detailtext1}
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold15,
            {color: '#000000', marginLeft: deviceWidth * 0.088},
          ]}>
          {detailtext2}
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold15,
            {color: '#000000', marginLeft: deviceWidth * 0.042},
          ]}>
          {detailtext3}
        </Text>
        <Text style={[AllTextStyles.SemiBold15, {color: '#000000'}]}>
          {detailtext4}
        </Text>
      </View>
    </View>
  );
};
