/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllViewBarProps {
  titletext?: string;
  detailtext?: string;
  detailtext1?: string;
  detailtext2?: string;
  detailtext3?: string;
  detailtext4?: string;
}

/**
 * 조회기능에 들어가는 상세내용 초록색&연두색 제목바
 */
export const ShuttleBusBar: React.FC<AllViewBarProps> = ({
  titletext,
  detailtext,
  detailtext1,
  detailtext2,
  detailtext3,
  detailtext4,
}) => {
  return (
    <View
      style={{
        marginLeft: deviceWidth * 0.05,
        marginTop: deviceHeight * 0.01,
        marginBottom: deviceHeight * 0.06,
      }}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.065,
            },
          ]}>
          {titletext}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceHeight * 0.05,
          marginRight: deviceWidth * 0.87,
        }}></View>
      <Text
        style={{
          marginTop: deviceHeight * 0.015,
          marginBottom: deviceHeight * 0.015,
        }}>
        * 승차장소 : {detailtext}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.19,
            height: deviceHeight * 0.043,
            backgroundColor: '#009B64',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>
            시간
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.72,
            borderBottomColor: '#898A8D',
            borderBottomWidth: deviceWidth * 0.001,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold14]}>{detailtext1}</Text>
          <Text style={[AllTextStyles.SemiBold14]}>{detailtext2}</Text>
          <Text style={[AllTextStyles.SemiBold14]}>{detailtext3}</Text>
          <Text style={[AllTextStyles.SemiBold14]}>{detailtext4}</Text>
        </View>
      </View>
    </View>
  );
};
export const MoneyShuttleBusBar: React.FC<AllViewBarProps> = ({
  titletext,
  detailtext,
  detailtext1,
  detailtext2,
  detailtext3,
}) => {
  return (
    <View
      style={{
        marginLeft: deviceWidth * 0.05,
        marginTop: deviceHeight * 0.01,
        marginBottom: deviceHeight * 0.06,
      }}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.065,
            },
          ]}>
          {titletext}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceHeight * 0.05,
          marginRight: deviceWidth * 0.87,
        }}></View>
      <Text
        style={{
          marginTop: deviceHeight * 0.015,
          marginBottom: deviceHeight * 0.015,
        }}>
        * 승차장소 : {detailtext}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.19,
            height: deviceHeight * 0.043,
            backgroundColor: '#009B64',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>
            시간
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
            style={[
              AllTextStyles.SemiBold14,
              {marginLeft: deviceWidth * 0.05},
            ]}>
            {detailtext1}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: deviceWidth * 0.72,
          borderBottomColor: '#898A8D',
          borderBottomWidth: deviceWidth * 0.001,
          justifyContent: 'center',
          marginLeft: deviceWidth * 0.19,
          height: deviceHeight * 0.05,
          marginBottom: deviceHeight * 0.03,
        }}>
        <Text
          style={[AllTextStyles.SemiBold14, {marginLeft: deviceWidth * 0.05}]}>
          {detailtext2}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.19,
            height: deviceHeight * 0.043,
            backgroundColor: '#009B64',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>
            운행요금
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
            style={[
              AllTextStyles.SemiBold14,
              {marginLeft: deviceWidth * 0.05},
            ]}>
            {detailtext3}
          </Text>
        </View>
      </View>
    </View>
  );
};
