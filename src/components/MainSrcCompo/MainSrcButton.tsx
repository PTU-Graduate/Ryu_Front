/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text: string;
  onPress?: () => void;
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

export const MainServiceButton: React.FC<AllBackgroundProps> = ({
  text,
  onPress,
}) => {
  return (
    <View style={{marginLeft: deviceWidth * 0.05}}>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.18,
          height: deviceWidth * 0.18,
          borderRadius: 50,
        }}
        onPress={onPress}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../assets/images/LOGO.png')}></Image>
      </TouchableOpacity>
      <View
        style={{
          width: deviceWidth * 0.18,
          alignItems: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold11,
            {
              color: '#C9C6C6',
              marginTop: deviceHeight * 0.018,
            },
          ]}>
          {text}
        </Text>
      </View>
    </View>
  );
};
