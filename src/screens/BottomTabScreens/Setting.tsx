import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {
  DetailSettingArrow,
  DetailSettingButton,
} from '../../components/SettingComponets/SettingCompo';
import {ScreenProps} from '../../navigations/StackNavigator';

const Setting: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="설 정" onPress={() => navigation.goBack()} />
      </View>
      <View
        style={{
          flex: 4,
          width: deviceWidth * 0.9,
          marginLeft: deviceWidth * 0.05,
        }}>
        <Text
          style={[AllTextStyles.SemiBold14, {marginLeft: deviceWidth * 0.02}]}>
          로그인 및 회원정보
        </Text>
        <View
          style={{
            width: deviceWidth * 0.9,
            borderBottomColor: '#000000',
            borderBottomWidth: deviceWidth * 0.004,
            marginTop: deviceHeight * 0.01,
          }}></View>
        <DetailSettingButton text="자동로그인" />
        <DetailSettingArrow
          text="비밀번호 변경"
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <DetailSettingArrow text="로그아웃" />
        <DetailSettingButton text="생체인증 설정" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.06,
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold13,
              {marginLeft: deviceWidth * 0.02},
            ]}>
            알림 설정
          </Text>
          <View
            style={{
              width: deviceWidth * 0.1,
              height: deviceHeight * 0.028,
              backgroundColor: '#C9C6C6',
              borderRadius: 10,
              marginRight: deviceWidth * 0.02,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: deviceWidth * 0.055,
                height: deviceHeight * 0.027,
                backgroundColor: '#ffffff',
                borderColor: '#C9C6C6',
                borderWidth: 0.5,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 6,
          width: deviceWidth * 0.9,
          marginLeft: deviceWidth * 0.05,
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold14,
            {marginLeft: deviceWidth * 0.02, marginTop: deviceHeight * 0.025},
          ]}>
          약관 및 정책
        </Text>
        <View
          style={{
            width: deviceWidth * 0.9,
            borderBottomColor: '#000000',
            borderBottomWidth: deviceWidth * 0.004,
            marginTop: deviceHeight * 0.01,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.06,
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold13,
              {marginLeft: deviceWidth * 0.02},
            ]}>
            현재 버전
          </Text>
          <View style={{marginRight: deviceWidth * 0.02}}>
            <Text style={[AllTextStyles.SemiBold13, {color: '#BEBEBE'}]}>
              1.0.3.31
            </Text>
          </View>
        </View>
      </View>
    </AllBackground>
  );
};

export default Setting;
