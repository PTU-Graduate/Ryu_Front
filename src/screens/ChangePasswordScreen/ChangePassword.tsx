import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {ChangePasswordInput} from '../../components/AllSrcComponets/AllInputCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScreenProps} from '../../navigations/StackNavigator';

const ChangePassword: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="비 밀 번 호 변 경"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: deviceWidth * 0.21,
            height: deviceHeight * 0.025,
            marginRight: deviceWidth * 0.64,
            marginBottom: deviceHeight * -0.015,
          }}>
          <Text style={[AllTextStyles.SemiBold12]}>현재 비밀번호</Text>
        </View>
        <ChangePasswordInput />
        <View
          style={{
            width: deviceWidth * 0.21,
            height: deviceHeight * 0.025,
            marginRight: deviceWidth * 0.64,
            marginTop: deviceHeight * 0.075,
            marginBottom: deviceHeight * -0.015,
          }}>
          <Text style={[AllTextStyles.SemiBold12]}>새 비밀번호</Text>
        </View>
        <ChangePasswordInput />
        <View
          style={{
            width: deviceWidth * 0.21,
            height: deviceHeight * 0.025,
            marginRight: deviceWidth * 0.64,
            marginTop: deviceHeight * 0.065,
            marginBottom: deviceHeight * -0.015,
          }}>
          <Text style={[AllTextStyles.SemiBold12]}>새 비밀번호 확인</Text>
        </View>
        <ChangePasswordInput />
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.35,
            height: deviceHeight * 0.062,
            backgroundColor: '#009B64',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: deviceHeight * 0.04,
          }}>
          <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
            비밀번호 변경하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.35,
            height: deviceHeight * 0.062,
            borderColor: '#009B64',
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: deviceHeight * 0.04,
          }}>
          <Text style={[AllTextStyles.SemiBold14, {color: '#009B64'}]}>
            다음에 변경하기
          </Text>
        </TouchableOpacity>
      </View>
    </AllBackground>
  );
};

export default ChangePassword;
