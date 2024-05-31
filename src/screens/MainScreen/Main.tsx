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

const Main = () => {
  const userData = getUserData();
  return (
    <AllBackground>
      <View
        style={{
          flex: 1,
          marginLeft: deviceWidth * 0.05,
          marginRight: deviceWidth * 0.05,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/images/HomeTopLogo.png')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <MainTapbutton text="공지사항" />
          <MainTapbutton text="이슈" />
          <MainTapbutton text="추천" />
        </View>
        <View
          style={{
            flex: 3,
            marginLeft: deviceWidth * 0.025,
            marginRight: deviceWidth * 0.025,
          }}>
          <Swiper>
            <Image
              resizeMode="contain"
              style={{flex: 1, width: undefined, height: undefined}}
              source={require('../../assets/images/testImage.png')}
            />
          </Swiper>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>즐겨찾기</Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            marginTop: deviceHeight * 0.035,
          }}>
          <MainIconbutton text="검색하기" />
          <MainIconbutton text="검색하기" />
          <MainIconbutton text="검색하기" />
          <MainIconbutton text="검색하기" />
        </View>
      </View>
    </AllBackground>
  );
};

export default Main;
