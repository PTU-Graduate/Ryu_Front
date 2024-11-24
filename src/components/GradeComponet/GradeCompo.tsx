/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
interface AllButtonCompoProps {
  titleText?: string;
  detailText1?: string;
  detailText2?: string;
  detailText3?: string;
  detailText4?: string;
  detailText5?: string;
  detailText6?: string;
  detailText7?: string;
}

/**
 * 공지사항 화면에 사용되는 초록색 공통 버튼
 */
export const GradeButton: React.FC<AllButtonCompoProps> = ({
  titleText,
  detailText1,
  detailText2,
  detailText3,
  detailText4,
  detailText5,
  detailText6,
  detailText7,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: deviceHeight * 0.02,
        width: deviceWidth * 0.9,
      }}>
      <View
        style={{
          width: deviceWidth * 0.17,
          height: deviceHeight * 0.12,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: deviceWidth * 0.01,
        }}>
        <Text style={[AllTextStyles.medium11]}>{titleText}</Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.005,
          height: deviceWidth * 0.27,
          backgroundColor: '#AFAFAF',
          marginRight: deviceWidth * 0.015,
        }}
      />
      <View>
        <View
          style={{
            width: deviceWidth * 0.7,
            height: deviceWidth * 0.07,
            backgroundColor: '#009B64',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={[
              AllTextStyles.medium13,
              {color: '#ffffff', width: deviceWidth * 0.12},
            ]}>
            출석점수
          </Text>
          <Text
            style={[
              AllTextStyles.medium13,
              {color: '#ffffff', width: deviceWidth * 0.12},
            ]}>
            과제점수
          </Text>
          <Text
            style={[
              AllTextStyles.medium13,
              {color: '#ffffff', width: deviceWidth * 0.12},
            ]}>
            시험점수
          </Text>
          <Text
            style={[
              AllTextStyles.medium13,
              {color: '#ffffff', width: deviceWidth * 0.12},
            ]}>
            기타점수
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.7,
            height: deviceWidth * 0.07,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText1}
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText2}
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText3}
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText4}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: deviceWidth * 0.7,
            height: deviceWidth * 0.07,
            backgroundColor: '#009B64',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#ffffff'}]}>
              총점수
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#ffffff'}]}>
              석차
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#ffffff'}]}>
              등급
            </Text>
          </View>
          <View
            style={{backgroundColor: '#009B64', width: deviceWidth * 0.12}}
          />
        </View>
        <View
          style={{
            width: deviceWidth * 0.7,
            height: deviceWidth * 0.07,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText5}
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText6}
            </Text>
          </View>
          <View style={{width: deviceWidth * 0.12, alignItems: 'center'}}>
            <Text style={[AllTextStyles.medium13, {color: '#000000'}]}>
              {detailText7}
            </Text>
          </View>
          <View
            style={{backgroundColor: '#ffffff', width: deviceWidth * 0.12}}
          />
        </View>
      </View>
    </View>
  );
};
