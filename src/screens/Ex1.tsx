import React from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {
  SignLogGrayButton,
  SignLogGreenButton,
} from '../components/AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../components/AllSrcComponets/AllInputCompo';
import {ScreenProps} from '../navigations/StackNavigator';
const Ex1: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <SignLogGreenButton
        text="로그인 스크린 이동"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <SignLogGrayButton
        text="회원가입 스크린 이동"
        onPress={() => navigation.navigate('RegiHakgua')}
      />
      <SignLogInput text="비밀번호" />
    </AllBackground>
  );
};

export default Ex1;
