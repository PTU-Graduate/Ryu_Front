/* eslint-disable react-native/no-inline-styles */
import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {ScreenProps} from '../../navigations/StackNavigator';
import {loginApiCall} from '../../services/_private/Login/LoginApi';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {SignLogInput} from '../../components/AllSrcComponets/AllInputCompo';
import {LoginGreenButton} from '../../components/AllSrcComponets/AllButtonCompo';
import RegiHakgua from '../RegiScreen/RegiHakgua';

const Login: React.FC<ScreenProps> = ({navigation}) => {
  const [loginId, setLoginId] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');

  const handleLogin = async () => {
    const result = await loginApiCall(loginId, loginPass);
    if (result !== null && result.RSLT_CD === '00') {
      navigation.reset({
        index: 0,
        routes: [{name: 'DrawerNavigation'}],
      });
    } else {
      Alert.alert('실패');
    }
  };
  return (
    <AllBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          로그인
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          marginLeft: deviceWidth * 0.05,
        }}>
        <Text
          style={{
            marginTop: deviceHeight * 0.08,
            fontSize: 23,
            fontWeight: 'bold',
          }}>
          안녕하세요
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginTop: deviceHeight * 0.006,
          }}>
          <Text style={{color: '#009B64'}}>평택대학교</Text>
          입니다.
        </Text>
        <Text
          style={{
            color: '#5c5c5c',
            fontSize: 12,
            marginTop: deviceHeight * 0.01,
          }}>
          회원 서비스 이용을 위해 로그인 해주세요.
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: '300',
            marginRight: deviceWidth * 0.81,
            marginBottom: deviceHeight * -0.005,
            marginTop: deviceHeight * 0.08,
          }}>
          학번
        </Text>
        <SignLogInput value={loginId} onChangeText={text => setLoginId(text)} />
        <Text
          style={{
            color: '#000',
            fontWeight: '300',
            marginTop: deviceHeight * 0.05,
            marginBottom: deviceHeight * -0.005,
            marginRight: deviceWidth * 0.75,
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
        <LoginGreenButton text="로그인" onPress={handleLogin} />
        <LoginGreenButton
          text="회원가입"
          onPress={() => navigation.navigate('RegiHakgua')}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 10.5, color: '#cdcdcd', fontWeight: 'bold'}}>
          로그인정보는 포털과 동일합니다. (학생은 학번, 교직원은 사번입니다.
        </Text>
        <Text style={{fontSize: 10.5, color: '#cdcdcd', fontWeight: 'bold'}}>
          아이디 찾기 / 비밀번호 찾기는 PC에서 포털을 이용하시기 바랍니다.)
        </Text>
      </View>
    </AllBackground>
  );
};

export default Login;
