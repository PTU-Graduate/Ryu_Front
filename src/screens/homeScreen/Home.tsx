import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/Octicons';
import MatIcon from 'react-native-vector-icons/SimpleLineIcons';
import Swiper from 'react-native-swiper';
import {
  HomeTapbutton,
  HomeIconbutton,
} from '../../components/homeSrcCompo/HomeSrcButton';

const Home = () => {
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
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/images/HomeTopLogo.png')}
            style={{
              marginLeft: deviceWidth * 0.25,
            }}></Image>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.1,
              height: deviceHeight * 0.05,
            }}>
            <Icon name="unlock" size={20}></Icon>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <HomeTapbutton text="공지사항"></HomeTapbutton>
          <HomeTapbutton text="이슈"></HomeTapbutton>
          <HomeTapbutton text="추천"></HomeTapbutton>
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
              source={require('../../assets/images/testImage.png')}></Image>
          </Swiper>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>우아아가악</Text>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.1,
              height: deviceHeight * 0.05,
              justifyContent: 'flex-end',
            }}>
            <MatIcon name="arrow-right" size={20}></MatIcon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <HomeIconbutton text="검색하기"></HomeIconbutton>
          <HomeIconbutton text="검색하기"></HomeIconbutton>
          <HomeIconbutton text="검색하기"></HomeIconbutton>
          <HomeIconbutton text="검색하기"></HomeIconbutton>
        </View>
      </View>
    </AllBackground>
  );
};

export default Home;
