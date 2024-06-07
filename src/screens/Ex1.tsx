import React from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {LoginGreenButton} from '../components/AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../components/AllSrcComponets/AllInputCompo';
import {ScreenProps} from '../navigations/StackNavigator';
const Ex1: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <LoginGreenButton
        text="로그인 스크린 이동"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <LoginGreenButton
        text="회원가입 스크린 이동"
        onPress={() => navigation.navigate('RegiHakgua')}
      />
      <LoginGreenButton
        text="공지사항 스크린 이동"
        onPress={() => navigation.navigate('Notice')}
      />
      <LoginGreenButton
        text="안정연의 작업공간"
        onPress={() => navigation.navigate('PointScreen')}
      />
      <LoginGreenButton
        text="박미현의 작업공간"
        onPress={() => navigation.navigate('Mimi')}
      />
      <LoginGreenButton
        text="메인"
        onPress={() => navigation.navigate('DrawerNavigation')}
      />
      <SignLogInput text="비밀번호" />
     
      <LoginGreenButton
        text="안정연의 작업공간2"
        onPress={() => navigation.navigate('StudentInfo')}
      />
    </AllBackground>
  );
};

export default Ex1;
