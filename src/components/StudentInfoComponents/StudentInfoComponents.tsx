import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
interface StudentInfoProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
}

export const StudentInfoTextbar: React.FC<StudentInfoProps> = ({
  text,
  children,
}) => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <Text
        style={[
          AllTextStyles.SemiBold17,
          {color: '#009B64', marginLeft: deviceWidth * 0.05},
        ]}>
        학적구분
      </Text>
      <View
        style={{
          marginLeft: deviceWidth * 0.05,
          width: deviceWidth * 0.004,
          height: deviceHeight * 0.032,
          backgroundColor: '#000000',
        }}></View>
      <Text
        style={[AllTextStyles.SemiThin16, {marginLeft: deviceWidth * 0.05}]}>
        휴학
      </Text>
    </View>
  );
};
