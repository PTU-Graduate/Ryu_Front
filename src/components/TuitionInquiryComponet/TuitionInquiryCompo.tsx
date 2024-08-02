import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface TuitionInquiryProps {
  titleText?: string;
  detailText?: string;
}

export const TIDetailBar: React.FC<TuitionInquiryProps> = ({
  titleText,
  detailText,
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: deviceHeight * 0.012,
      }}>
      <View
        style={{
          width: deviceWidth * 0.19,
          height: deviceHeight * 0.043,
          backgroundColor: '#009B64',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>
          {titleText}
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.72,
          borderBottomColor: '#898A8D',
          borderBottomWidth: deviceWidth * 0.001,
          justifyContent: 'center',
        }}>
        <Text
          style={[AllTextStyles.SemiBold14, {marginLeft: deviceWidth * 0.04}]}>
          {detailText}
        </Text>
      </View>
    </View>
  );
};
