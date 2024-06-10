/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image} from 'react-native';
import React from 'react';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Swiper from 'react-native-swiper';
import {
  MainIconbutton,
  MainTapbutton,
} from '../../components/MainSrcCompo/MainSrcButton';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Main = () => {
  const userData = getUserData();
  return (
    <AllBackground>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/images/HomeTopLogo.png')} />
      </View>
      <View
        style={{
          flex: 3,
        }}>
        <Swiper>
          <Image
            style={{
              flex: 1,
              marginTop: deviceWidth * 0.06,
              marginBottom: deviceWidth * 0.08,
              width: deviceWidth * 1,
            }}
            source={require('../../assets/images/testImage.png')}
          />
        </Swiper>
      </View>
      <View style={{flex: 2}}>
        <Text style={AllTextStyles.SemiBold18}>스마트 서비스</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.2,
              height: deviceHeight * 0.14,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.2,
              height: deviceHeight * 0.14,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.2,
              height: deviceHeight * 0.14,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.2,
              height: deviceHeight * 0.14,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text style={AllTextStyles.SemiBold18}>종합정보 바로가기 서비스</Text>
      </View>
    </AllBackground>
  );
};

export default Main;
