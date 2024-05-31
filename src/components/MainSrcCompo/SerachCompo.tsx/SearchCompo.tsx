import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../../utils/DeviceUtils';

interface SearchCompoProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
  onPress?: () => void;
}

/**
 * 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const SearchGraybar: React.FC<SearchCompoProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <View style={styles.ViewStyles}>
      <Text style={styles.textStyles}>{text}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: deviceWidth * 0.75,
          top: deviceHeight * 0.015,
        }}>
        <Text style={{color: '#C9C6C6'}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyles: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.05,
    borderBottomColor: '#C9C6C6',
    borderBottomWidth: 1,
    paddingTop: deviceHeight * 0.017,
    paddingLeft: deviceWidth * 0.02,
  },
  textStyles: {
    color: '#626262',
  },
});
