/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text, View} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AllViewBarProps {
  titletext1?: string;
  titletext2?: string;
  detailtext?: string;
  detailtext1?: string;
  detailtext2?: string;
  detailtext3?: string;
  detailtext4?: string;
}

/**
 * 셔틀버스 시간조회에 들어가는 무료노선 상세바
 */
export const FreeShuttleBusBar: React.FC<AllViewBarProps> = ({
  titletext1,
  titletext2,
  detailtext,
  detailtext1,
  detailtext2,
  detailtext3,
  detailtext4,
}) => {
  return (
    <View style={{marginTop: deviceHeight * 0.005}}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceWidth * 0.1,
          position: 'absolute',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.06,
              marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
            },
          ]}>
          {titletext1}
        </Text>
        <Icon
          style={{
            marginLeft: deviceWidth * 0.015,
            marginBottom: deviceWidth * 0.005,
          }}
          name="arrow-right"
          size={16}
          color="#ffffff"
        />
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.015,
              marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
            },
          ]}>
          {titletext2}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceWidth * 0.1,
        }}></View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={{
            marginTop: deviceWidth * 0.034,
            marginBottom: deviceWidth * 0.015,
            marginRight: deviceWidth * 0.01,
          }}
          name="circle"
          size={5}
          color="#000000"
        />
        <Text
          style={{
            marginTop: deviceWidth * 0.02,
            marginBottom:
              Platform.OS === 'ios'
                ? deviceHeight * 0.012
                : deviceHeight * 0.012,
          }}>
          승차장소 : {detailtext}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.2,
            height: deviceWidth * 0.08,
            backgroundColor: '#009B64',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {
                color: '#ffffff',
                marginBottom:
                  Platform.OS === 'ios' ? null : deviceHeight * 0.005,
              },
            ]}>
            시 간
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.7,
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
    </View>
  );
};

/**
 * 셔틀버스 시간조회에 들어가는 유료노선 상세바
 */
export const MoneyShuttleBusBar: React.FC<AllViewBarProps> = ({
  titletext1,
  titletext2,
  detailtext,
  detailtext1,
  detailtext2,
  detailtext3,
}) => {
  return (
    <View style={{marginTop: deviceHeight * 0.005}}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceWidth * 0.1,
          position: 'absolute',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.06,
              marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
            },
          ]}>
          {titletext1}
        </Text>
        <Icon
          style={{
            marginLeft: deviceWidth * 0.015,
            marginBottom: deviceWidth * 0.005,
          }}
          name="arrow-right"
          size={16}
          color="#ffffff"
        />
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.015,
              marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
            },
          ]}>
          {titletext2}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceWidth * 0.1,
        }}></View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={{
            marginTop: deviceWidth * 0.034,
            marginBottom: deviceWidth * 0.015,
            marginRight: deviceWidth * 0.01,
          }}
          name="circle"
          size={5}
          color="#000000"
        />
        <Text
          style={{
            marginTop: deviceWidth * 0.02,
            marginBottom:
              Platform.OS === 'ios'
                ? deviceHeight * 0.012
                : deviceHeight * 0.012,
          }}>
          승차장소 : {detailtext}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.2,
            height: deviceWidth * 0.08,
            backgroundColor: '#009B64',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {
                color: '#ffffff',
                marginBottom:
                  Platform.OS === 'ios' ? null : deviceHeight * 0.005,
              },
            ]}>
            시 간
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.7,
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
          width: deviceWidth * 0.7,
          borderBottomColor: '#898A8D',
          borderBottomWidth: deviceWidth * 0.001,
          justifyContent: 'center',
          paddingTop: deviceHeight * 0.005,
          marginLeft: deviceWidth * 0.2,
          height: deviceWidth * 0.085,
          marginBottom: deviceWidth * 0.03,
        }}>
        <Text
          style={[AllTextStyles.SemiBold14, {marginLeft: deviceWidth * 0.05}]}>
          {detailtext2}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: deviceWidth * 0.2,
            height: deviceWidth * 0.08,
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
            width: deviceWidth * 0.7,
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
