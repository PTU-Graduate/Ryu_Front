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
import {ScreenProps} from '../../navigations/StackNavigator';

const Main: React.FC<ScreenProps> = ({navigation}) => {
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
        <Text
          style={[AllTextStyles.SemiBold17, {marginLeft: deviceWidth * 0.05}]}>
          스마트 서비스
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: deviceHeight * 0.03,
          }}>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
              marginLeft: deviceWidth * 0.05,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
              marginLeft: deviceWidth * 0.06,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
              marginLeft: deviceWidth * 0.06,
            }}></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.09,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            홈페이지
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.15,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            e 학사
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.14,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            평택대교회
          </Text>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text
          style={[AllTextStyles.SemiBold17, {marginLeft: deviceWidth * 0.05}]}>
          종합정보 바로가기 서비스
        </Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginTop: deviceHeight * 0.03,
          }}>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
            }}
            onPress={() => navigation.navigate('Notice')}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
            }}
            onPress={() => navigation.navigate('Grade')}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: deviceWidth * 0.18,
              height: deviceHeight * 0.1,
              borderRadius: 50,
              backgroundColor: '#123',
            }}></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.095,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            공지사항
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.135,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            출석조회
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.135,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            성적조회
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold11,
              {
                color: '#C9C6C6',
                marginLeft: deviceWidth * 0.1,
                marginTop: deviceHeight * 0.018,
              },
            ]}>
            셔틀버스 조회
          </Text>
        </View>
      </View>
    </AllBackground>
  );
};

export default Main;
