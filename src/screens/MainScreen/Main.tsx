/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image} from 'react-native';
import React from 'react';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {MainServiceButton} from '../../components/MainSrcCompo/MainSrcButton';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScreenProps} from '../../navigations/StackNavigator';

const Main: React.FC<ScreenProps> = ({navigation}) => {
  const userData = getUserData();
  return (
    <AllBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: deviceWidth * 0.55,
            marginTop: deviceHeight * 0.02,
          }}
          source={require('../../assets/images/MainTopLogo.jpeg')}></Image>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
        }}>
        <Image
          style={{
            flex: 1,
            marginTop: deviceWidth * 0.04,
            marginBottom: deviceWidth * 0.08,
            width: deviceWidth * 1,
          }}
          source={require('../../assets/images/testImage.png')}
        />
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
          <MainServiceButton
            text="홈페이지"
            uri={require('../../assets/images/homepage.png')}
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                url: 'https://www.ptu.ac.kr/www/index.do',
                title: '홈페이지',
              })
            }
          />
          <MainServiceButton
            text="e학사"
            uri={require('../../assets/images/e.png')}
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                url: 'https://haksa.ptu.ac.kr',
                title: 'e학사',
              })
            }
          />
          <MainServiceButton
            text="평댁대교회"
            uri={require('../../assets/images/church.png')}
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                url: 'http://www.ptuc.or.kr',
                title: '평택대학교회',
              })
            }
          />
        </View>
      </View>
      <View style={{flex: 2}}>
        <View style={{marginTop: deviceHeight * -0.01}}>
          <Text
            style={[
              AllTextStyles.SemiBold17,
              {marginLeft: deviceWidth * 0.05},
            ]}>
            종합정보 바로가기 서비스
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: deviceHeight * 0.03,
            }}>
            <MainServiceButton
              text="공지사항"
              onPress={() => navigation.navigate('Notice')}
              uri={require('../../assets/images/notice.png')}
            />
            <MainServiceButton
              text="출석조회"
              onPress={() => navigation.navigate('AttendanceInquiry')}
              uri={require('../../assets/images/school.png')}
            />
            <MainServiceButton
              text="성적조회"
              onPress={() => navigation.navigate('Grade')}
              uri={require('../../assets/images/grade.png')}
            />
            <MainServiceButton
              text="셔틀버스 조회"
              onPress={() => navigation.navigate('FreeShuttleBus')}
              uri={require('../../assets/images/bus.png')}
            />
          </View>
        </View>
      </View>
    </AllBackground>
  );
};

export default Main;
