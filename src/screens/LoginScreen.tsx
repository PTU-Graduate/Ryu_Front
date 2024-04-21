/* eslint-disable react-native/no-inline-styles */
import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {deviceWidth, deviceHeight} from '../utils/DeviceUtils';
import {SignLogInput} from '../components/AllSrcComponets/AllInputCompo';
import {SignLogGreenButton} from '../components/AllSrcComponets/AllButtonCompo';
import {loginApiCall} from '../services/_private/Login/LoginApi';
import {ScreenProps} from '../navigations/StackNavigator';

const LoginScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [loginId, setLoginId] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');

  const handleLogin = async () => {
    const result = await loginApiCall(loginId, loginPass);

    if (result !== null && result.RSLT_CD === '00') {
      navigation.navigate('Home');
    } else {
      Alert.alert('실패');
    }
  };
  return (
    <AllBackground>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>로그인</Text>
      </View>
      <View style={{flex: 2, marginLeft: deviceWidth * 0.05}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>안녕하세요</Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: deviceHeight * 0.006,
          }}>
          <Text style={{color: '#009B64'}}>평택대학교</Text>
          입니다.
        </Text>
        <Text style={{color: '#5c5c5c', marginTop: deviceHeight * 0.01}}>
          회원 서비스 이용을 위해 로그인 해주세요
        </Text>
      </View>
      <View style={{flex: 3, marginLeft: deviceWidth * 0.05}}>
        <Text style={{color: '#000', fontWeight: '300'}}>아이디</Text>
        <SignLogInput value={loginId} onChangeText={text => setLoginId(text)} />
        <Text
          style={{
            color: '#000',
            fontWeight: '300',
            marginTop: deviceHeight * 0.03,
          }}>
          비밀번호
        </Text>
        <SignLogInput
          passsecure={true}
          value={loginPass}
          onChangeText={text => setLoginPass(text)}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <SignLogGreenButton text="로그인" onPress={handleLogin} />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: deviceWidth * 0.1,
          marginRight: deviceWidth * 0.1,
        }}>
        <Text style={{fontSize: 11, color: '#cdcdcd', fontWeight: 'bold'}}>
          로그인정보는 포털과 동일합니다. (학생은 학번, 교직원은 사번입니다 :)
          아이디 찾기 / 비밀번호 찾기는 PC에서 포털을 이용하시기 바랍니다.
        </Text>
      </View>
    </AllBackground>
  );
};

export default LoginScreen;
