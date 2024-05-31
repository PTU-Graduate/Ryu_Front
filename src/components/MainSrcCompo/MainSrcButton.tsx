/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text: string;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const MainTapbutton: React.FC<AllBackgroundProps> = ({text}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight * 0.06,
        width: deviceWidth * 0.18,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#909090'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const MainIconbutton: React.FC<AllBackgroundProps> = ({text}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        height: deviceHeight * 0.15,
        width: deviceWidth * 0.2,
        marginLeft: deviceWidth * 0.02,
      }}>
      <Image
        style={{
          width: deviceWidth * 0.15,
          height: deviceHeight * 0.15,
          resizeMode: 'contain',
        }}
        source={require('../../assets/images/Vector.png')}
      />
      <Text style={{marginTop: deviceHeight * 0.005, color: '#cdcdcd'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
