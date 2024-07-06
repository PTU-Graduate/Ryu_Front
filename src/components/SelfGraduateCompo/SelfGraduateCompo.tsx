import {View, Text} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
interface SelfGraduateProps {
  children?: React.ReactNode;
  text?: string;
  titletext?: string;
  detailtext?: string;
  detailtext1?: string;
  detailtext2?: string;
  detailtext3?: string;
  detailtext4?: string;
}

export const SelfGraduatetTextbar: React.FC<SelfGraduateProps> = ({
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

/**
 * 성적조회 페이지 ->  성적목록 상세바
 */
export const SelfGraduateDetailBar: React.FC<SelfGraduateProps> = ({
  text,
  detailtext1,
  detailtext2,
  detailtext3,
  detailtext4,
}) => {
  return (
    <View>
      <View>
        <Text
          style={[AllTextStyles.SemiBold14, {marginTop: deviceHeight * 0.02}]}>
          {text}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#009b64',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.045,
            borderRadius: 6,
            marginTop: deviceHeight * 0.015,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={[AllTextStyles.SemiBold11, {color: '#ffffff'}]}>
            졸업기준학점(횟수)
          </Text>
          <Text style={[AllTextStyles.SemiBold11, {color: '#ffffff'}]}>
            취득학점(횟수)
          </Text>
          <Text style={[AllTextStyles.SemiBold11, {color: '#ffffff'}]}>
            결과
          </Text>
          <Text style={[AllTextStyles.SemiBold11, {color: '#ffffff'}]}>
            부족학점(횟수)
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#666666',
            borderBottomWidth: 0.3,
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.05,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: deviceWidth * 0.025,
            paddingRight: deviceWidth * 0.025,
          }}>
          <View
            style={{
              width: deviceWidth * 0.23,
              alignItems: 'center',
            }}>
            <Text style={[AllTextStyles.medium11]}>{detailtext1}</Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.2,
              alignItems: 'center',
            }}>
            <Text style={[AllTextStyles.medium11]}>{detailtext2}</Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.055,
              alignItems: 'center',
            }}>
            <Text style={[AllTextStyles.medium11, {color: '#2C0FDE'}]}>
              {detailtext3}
            </Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.19,
              alignItems: 'center',
            }}>
            <Text style={[AllTextStyles.medium11]}>{detailtext4}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
