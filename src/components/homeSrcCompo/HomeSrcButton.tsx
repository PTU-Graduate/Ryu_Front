/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AllBackgroundStyles from '../../styles/AllSrcStyles/AllBackgroundStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text: string;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const HomeTapbutton: React.FC<AllBackgroundProps> = ({
  children,
  text,
}) => {
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

export const HomeIconbutton: React.FC<AllBackgroundProps> = ({
  children,
  text,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        height: deviceHeight * 0.2,
        width: deviceWidth * 0.2,
        marginLeft: deviceWidth * 0.02,
      }}>
      <Image
        style={{
          width: deviceWidth * 0.2,
          height: deviceHeight * 0.1,
          resizeMode: 'contain',
        }}
        source={require('../../assets/images/Vector.png')}></Image>
      <Text style={{marginTop: deviceHeight * 0.05, color: '#cdcdcd'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
