import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface TuitionInquiryProps {
  titleText?: string;
  detailText?: string;
}

export const ScheduleText: React.FC<TuitionInquiryProps> = ({
  titleText,
  detailText,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            AllTextStyles.SemiBold14,
            {
              color: '#009B64',
              marginLeft: deviceWidth * 0.02,
              marginBottom: deviceHeight * 0.005,
            },
          ]}>
          {titleText}
        </Text>
        <Text
          style={[
            AllTextStyles.medium13,
            {
              marginLeft: deviceWidth * 0.1,
              marginBottom: deviceHeight * 0.005,
            },
          ]}>
          {detailText}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009B64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.0008,
          marginBottom: deviceHeight * 0.01,
        }}
      />
    </View>
  );
};
