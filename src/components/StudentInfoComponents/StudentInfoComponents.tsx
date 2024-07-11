import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
interface StudentInfoProps {
  titletext1?: string;
  titletext2?: string;
  detailtext1?: string;
  detailtext2?: string;
}

export const StudentInfoFDTextbar: React.FC<StudentInfoProps> = ({
  titletext1,
  titletext2,
  detailtext1,
  detailtext2,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: deviceWidth * 0.08,
        marginRight: deviceWidth * 0.1,
        marginBottom: deviceHeight * 0.045,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold17, {color: '#009B64'}]}>
          {titletext1}
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
          {detailtext1}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold17, {color: '#009B64'}]}>
          {titletext2}
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
          {detailtext2}
        </Text>
      </View>
    </View>
  );
};

export const StudentInfoTextbar: React.FC<StudentInfoProps> = ({
  titletext1,
  detailtext1,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: deviceHeight * 0.045,
        marginLeft: deviceWidth * 0.08,
      }}>
      <Text style={[AllTextStyles.SemiBold17, {color: '#009B64'}]}>
        {titletext1}
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
        {detailtext1}
      </Text>
    </View>
  );
};
