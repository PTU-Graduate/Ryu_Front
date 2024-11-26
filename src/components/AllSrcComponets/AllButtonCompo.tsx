import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight} from '../../utils/DeviceUtils';

interface AllButtonCompoProps {
  children?: React.ReactNode; // 부모, 자식 관계를 선언
  text?: React.ReactNode; // ReactNode로 변경 (string | ReactElement)
  onPress?: () => void;
  disable?: boolean;
}

/**
 * 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const SignGreenButton: React.FC<AllButtonCompoProps> = ({
  children,
  text,
  onPress,
  disable,
}) => {
  return (
    <TouchableOpacity
      style={[
        AllButtonStyles.SignLogGreenButtonStyle,
        {marginTop: deviceHeight * 0.04},
      ]}
      onPress={onPress}
      disabled={disable}>
      {typeof text === 'string' ? (
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      ) : (
        text
      )}
      {children}
    </TouchableOpacity>
  );
};

export const SignCheckGreenButton: React.FC<AllButtonCompoProps> = ({
  children,
  text,
  onPress,
  disable,
}) => {
  return (
    <TouchableOpacity
      style={[
        disable
          ? AllButtonStyles.SignLogGrayButtonStyle
          : AllButtonStyles.SignLogGreenButtonStyle,
        {marginTop: deviceHeight * 0.04},
      ]}
      onPress={onPress}
      disabled={disable}>
      {typeof text === 'string' ? (
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      ) : (
        text
      )}
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
      {typeof text === 'string' ? (
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>{text}</Text>
      ) : (
        text
      )}
      {children}
    </TouchableOpacity>
  );
};
