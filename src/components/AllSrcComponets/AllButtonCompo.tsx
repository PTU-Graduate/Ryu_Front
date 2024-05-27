/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight} from '../../utils/DeviceUtils';

interface AllButtonCompoProps {
  children?: React.ReactNode; // 부모, 자식 관계를 선언해주는 것 touchableopacity나 textinput안의 text를 선언할 때
  text?: string;
  onPress?: () => void;
}

/**
 * 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const SignGreenButton: React.FC<AllButtonCompoProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        AllButtonStyles.SignLogGreenButtonStyle,
        {marginTop: deviceHeight * 0.04},
      ]}
      onPress={onPress}>
      <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 로그인 화면에 사용되는 초록색 공통 버튼
 */
export const LoginGreenButton: React.FC<AllButtonCompoProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AllButtonStyles.SignLogGreenButtonStyle}
      onPress={onPress}>
      <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
