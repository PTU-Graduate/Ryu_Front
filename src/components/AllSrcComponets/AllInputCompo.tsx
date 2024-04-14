import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import AllInputStyles from '../../styles/AllSrcStyles/AllInputStyles';

interface AllInputCompoProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
}

/**
 * 로그인 및 회원가입 화면에 사용되는 인풋
 */
export const SignLogInput: React.FC<AllInputCompoProps> = ({text}) => {
  const placeholderText = typeof text === 'string' ? text : undefined;
  return (
    <TextInput
      placeholderTextColor="#C9C6C6"
      style={[AllInputStyles.SignLogInputStyle, AllTextStyles.medium14]}
      placeholder={placeholderText}
    />
  );
};
