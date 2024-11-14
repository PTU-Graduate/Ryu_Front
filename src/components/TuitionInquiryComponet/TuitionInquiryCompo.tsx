import {View, Text} from 'react-native';
import React from 'react';
import {deviceWidth} from '../../utils/DeviceUtils';
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
        height: deviceWidth * 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{width: deviceWidth * 0.37, alignItems: 'center'}}>
        <Text style={AllTextStyles.SemiBold15}>{titleText}</Text>
      </View>
      <View style={{width: deviceWidth * 0.45, alignItems: 'center'}}>
        <Text style={AllTextStyles.SemiBold15}>{detailText}</Text>
      </View>
    </View>
  );
};
