import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
interface StudentInfoProps {
  children?: React.ReactNode;
  titletext?: string;
  detailtext?: string;
}

export const SelfGraduatetTextbar: React.FC<StudentInfoProps> = ({
  titletext,
  detailtext,
}) => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <Text style={[AllTextStyles.SemiBold16]}>{titletext}</Text>
      <View
        style={{
          marginLeft: deviceWidth * 0.03,
          width: deviceWidth * 0.0032,
          height: deviceHeight * 0.032,
          backgroundColor: '#000000',
        }}></View>
      <Text
        style={[AllTextStyles.SemiThin16, {marginLeft: deviceWidth * 0.05}]}>
        {detailtext}
      </Text>
    </View>
  );
};
