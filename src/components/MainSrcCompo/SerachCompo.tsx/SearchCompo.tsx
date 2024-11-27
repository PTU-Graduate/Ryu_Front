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
      <View style={{position: 'absolute'}}>
        <TouchableOpacity
          style={{
            top: deviceWidth * 0.035,
            left: deviceWidth * 0.75,
          }}>
          <Text style={{color: '#C9C6C6'}}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyles: {
    marginBottom: deviceWidth * 0.01,
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.09,
    borderBottomColor: '#C9C6C6',
    borderBottomWidth: 0.5,
    paddingTop: deviceWidth * 0.035,
    paddingLeft: deviceWidth * 0.02,
  },
  textStyles: {
    color: '#626262',
  },
});
