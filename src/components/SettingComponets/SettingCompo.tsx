import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/AntDesign';

interface SettingProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
}

export const DetailSettingButton: React.FC<SettingProps> = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.055,
        borderBottomColor: '#C9C6C6',
        borderBottomWidth: 1,
      }}>
      <Text
        style={[AllTextStyles.SemiBold13, {marginLeft: deviceWidth * 0.02}]}>
        {text}
      </Text>
      <View
        style={{
          width: deviceWidth * 0.1,
          height: deviceHeight * 0.028,
          backgroundColor: '#C9C6C6',
          borderRadius: 10,
          marginRight: deviceWidth * 0.02,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.055,
            height: deviceHeight * 0.027,
            backgroundColor: '#ffffff',
            borderColor: '#C9C6C6',
            borderWidth: 0.5,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export const DetailSettingArrow: React.FC<SettingProps> = ({text, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.06,
        borderBottomColor: '#C9C6C6',
        borderBottomWidth: 1,
      }}>
      <Text
        style={[AllTextStyles.SemiBold13, {marginLeft: deviceWidth * 0.02}]}>
        {text}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{marginRight: deviceWidth * 0.02}}>
        <Icon style={{color: '#949494'}} name="right" size={16} />
      </TouchableOpacity>
    </View>
  );
};
