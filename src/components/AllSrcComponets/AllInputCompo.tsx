import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import AllInputStyles from '../../styles/AllSrcStyles/AllInputStyles';

interface AllInputCompoProps extends TextInputProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
  passsecure?: boolean;
}

/**
 * 로그인 및 회원가입 화면에 사용되는 인풋
 */
export const SignLogInput: React.FC<AllInputCompoProps> = ({
  text,
  passsecure,
  ...props
}) => {
  const placeholderText = typeof text === 'string' ? text : undefined;
  return (
    <TextInput
      placeholderTextColor="#C9C6C6"
      style={[AllInputStyles.SignLogInputStyle, AllTextStyles.medium14]}
      placeholder={placeholderText}
      secureTextEntry={passsecure}
      {...props}
    />
  );
};
