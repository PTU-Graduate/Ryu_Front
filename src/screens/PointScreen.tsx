import {View, Text} from 'react-native';
import React from 'react';
import AllTextStyles from '../styles/AllSrcStyles/AllTextStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {deviceHeight, deviceWidth} from '../utils/DeviceUtils';

const PointScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1, backgroundColor: '#cdcdcd'}}>
        <Text style={[AllTextStyles.SemiBold16, {color: '#009b64'}]}>
          2024년 1학기
        </Text>
        <Text style={AllTextStyles.SemiBold15}>포인트 목록</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          marginLeft: deviceWidth * 0.05,
          borderRadius: 10,
        }}>
        <View style={{}}>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.03,
                lineHeight: 35,
              },
            ]}>
            이번달 내역
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: deviceWidth * 0.03,
            }}>
            <Text style={[AllTextStyles.SemiBold16, {color: '#ffffff'}]}>
              100000000p{' '}
            </Text>
            <Icon
              style={{
                color: '#ffffff',
              }}
              name="chevron-right"
              size={25}
            />
          </View>
        </View>
      </View>

      <View style={{flex: 2, backgroundColor: '#789'}}></View>
      <View style={{flex: 1, backgroundColor: '#CDCDCD'}}></View>
      <View style={{flex: 1, backgroundColor: '#ADADAD'}}></View>
      <View style={{flex: 1, backgroundColor: '#adad'}}></View>
      <View style={{flex: 2, backgroundColor: '#fdf'}}></View>
    </SafeAreaView>
  );
};
export default PointScreen;
