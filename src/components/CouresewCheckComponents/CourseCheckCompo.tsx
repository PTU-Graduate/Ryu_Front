import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface CourseCheckProps {
  titleText?: string;
  detailText?: string;
  refinText?: string; // 교양
  dateText?: string; // 날짜
  stdnumText?: string; //학수번호
  gradeText?: string; // 학년
  creditText?: string; // 학점
  coursetext?: string; // 수강
}

export const CCDetailBar: React.FC<CourseCheckProps> = ({
  titleText,
  detailText,
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
        marginBottom: deviceHeight * 0.035,
      }}>
      <View
        style={{
          width: deviceWidth * 0.9,
          borderBottomColor: '#898A8D',
          borderBottomWidth: deviceWidth * 0.001,
          justifyContent: 'center',
        }}>
        <View style={{marginBottom: deviceWidth * 0.025}}>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {marginBottom: deviceHeight * 0.008},
            ]}>
            {titleText}
          </Text>
          <Text style={[AllTextStyles.SemiThin12]}>{detailText}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: deviceHeight * 0.003,
          }}>
          <Text style={[AllTextStyles.SemiThin11]}>{refinText}</Text>
          <View
            style={{
              width: deviceWidth * 0.0015,
              height: deviceHeight * 0.02,
              backgroundColor: '#000000',
            }}
          />
          <Text style={[AllTextStyles.SemiThin11]}>{dateText}</Text>
          <View
            style={{
              width: deviceWidth * 0.0015,
              height: deviceHeight * 0.02,
              backgroundColor: '#000000',
            }}
          />
          <Text style={[AllTextStyles.SemiThin11]}>{stdnumText}</Text>
          <View
            style={{
              width: deviceWidth * 0.0015,
              height: deviceHeight * 0.02,
              backgroundColor: '#000000',
            }}
          />
          <Text style={[AllTextStyles.SemiThin11]}>{gradeText}</Text>
          <View
            style={{
              width: deviceWidth * 0.0015,
              height: deviceHeight * 0.02,
              backgroundColor: '#000000',
            }}
          />
          <Text style={[AllTextStyles.SemiThin11]}>{creditText}</Text>
          <View
            style={{
              width: deviceWidth * 0.0015,
              height: deviceHeight * 0.02,
              backgroundColor: '#000000',
            }}
          />
          <Text style={[AllTextStyles.SemiThin11]}>{coursetext}</Text>
        </View>
      </View>
    </View>
  );
};
