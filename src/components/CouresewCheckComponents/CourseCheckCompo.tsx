import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CourseCheckProps {
  titleText?: string;
  detailText?: string;
  refinText?: string; // 교양
  dateText?: string; // 날짜
  stdnumText?: string; //학수번호
  gradeText?: string; // 학년
  creditText?: string; // 학점
  coursetext?: string; // 수강
  children?: React.ReactNode;
}

export const CCDetailBar: React.FC<CourseCheckProps> = ({
  titleText,
  detailText,
  children,
  refinText,
  dateText,
  stdnumText,
  gradeText,
  creditText,
  coursetext,
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',

        marginBottom: deviceHeight * 0.01,
      }}>
      <View
        style={{
          width: deviceWidth * 0.89,
          borderBottomColor: '#898A8D',
          borderBottomWidth: deviceWidth * 0.001,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {marginBottom: deviceWidth * 0.03},
            ]}>
            {titleText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin14,
              {marginLeft: deviceWidth * 0.03},
            ]}>
            {detailText}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AllTextStyles.SemiThin11,
              {
                marginLeft: deviceWidth * 0.035,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {refinText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin11,
              {
                marginLeft: deviceWidth * 0.06,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {dateText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin11,
              {
                marginLeft: deviceWidth * 0.06,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {stdnumText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin13,
              {
                marginLeft: deviceWidth * 0.06,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {gradeText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin11,
              {
                marginLeft: deviceWidth * 0.06,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {creditText}
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin11,
              {
                marginLeft: deviceWidth * 0.06,
                marginBottom: deviceWidth * 0.03,
              },
            ]}>
            {coursetext}
          </Text>
        </View>
      </View>
    </View>
  );
};
