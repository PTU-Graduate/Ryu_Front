import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import AllInputStyles from '../../styles/AllSrcStyles/AllInputStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllInputCompoProps extends TextInputProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
  passsecure?: boolean;
  isLoading?: boolean;
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
 * 비밀번호 변경 화면에 사용되는 인풋
 */
export const ChangePasswordInput: React.FC<AllInputCompoProps> = ({
  text,
  passsecure,
  ...props
}) => {
  const placeholderText = typeof text === 'string' ? text : undefined;
  return (
    <TextInput
      placeholderTextColor="#C9C6C6"
      style={[AllInputStyles.ChangePasswordInputStyle, AllTextStyles.medium14]}
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
  isLoading,
  ...props
}) => {
  const placeholderText = typeof text === 'string' ? text : undefined;

  // 로딩 상태를 받기 위한 추가 props (임시로 예제에 포함)

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
        allowFontScaling={false}
        {...props}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#626262',
          width: deviceWidth * 0.17,
          height: deviceWidth * 0.055,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          position: 'absolute',
          marginTop:
            deviceHeight >= 800 ? deviceHeight * 0.018 : deviceHeight * 0.01,
          right: 10,
        }}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.003,
            }}>
            중복확인
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
