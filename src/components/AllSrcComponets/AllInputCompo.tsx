import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import AllInputStyles from '../../styles/AllSrcStyles/AllInputStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllInputCompoProps extends TextInputProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
  passsecure?: boolean;
  onPress?: () => void;
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

/**
 * 회원가입 화면에 사용되는 중복확인 인풋
 */
export const SignLogCheckInput: React.FC<AllInputCompoProps> = ({
  text,
  children,
  passsecure,
  onPress,
  ...props
}) => {
  const placeholderText = typeof text === 'string' ? text : undefined;
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <TextInput
        placeholderTextColor="#C9C6C6"
        style={[AllInputStyles.SignLogInputStyle, AllTextStyles.medium14]}
        placeholder={placeholderText}
        secureTextEntry={passsecure}
        {...props}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: '#626262',
          width: deviceWidth * 0.17,
          height: deviceHeight * 0.034,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          position: 'absolute',
          marginLeft: deviceWidth * 0.35,
          top: 5,
          right: 10,
        }}
        onPress={onPress}>
        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>중복확인</Text>
      </TouchableOpacity>
    </View>
  );
};
