/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface AllButtonCompoProps {
  children?: React.ReactNode; // 부모, 자식 관계를 선언해주는 것 touchableopacity나 textinput안의 text를 선언할 때
  text?: string;
  onPress?: () => void;
}

/**
 * 로그인 및 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const SignLogGreenButton: React.FC<AllButtonCompoProps> = ({
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

/**
 * 로그인 및 회원가입 화면에 사용되는 회색 공통 버튼
 */
export const SignLogGrayButton: React.FC<AllButtonCompoProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AllButtonStyles.SignLogGrayButtonStyle}
      onPress={onPress}>
      <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
