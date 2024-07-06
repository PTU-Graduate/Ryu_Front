import React from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {LoginGreenButton} from '../components/AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../components/AllSrcComponets/AllInputCompo';
import {ScreenProps} from '../navigations/StackNavigator';
import {GreenViewBar} from '../components/AllSrcComponets/AllViewBar';
const Ex1: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <LoginGreenButton
        text="로그인 스크린 이동"
        onPress={() => navigation.navigate('Login')}
      />
      <LoginGreenButton
        text="회원가입 스크린 이동"
        onPress={() => navigation.navigate('RegiHakgua')}
      />
      <LoginGreenButton
        text="류채채 작업공간임당"
        onPress={() => navigation.navigate('AttendanceInquiry')}
      />
      <LoginGreenButton
        text="안정연의 작업공간"
        onPress={() => navigation.navigate('StudentInfo')}
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
        text="이하윤의 작업공간"
        onPress={() => navigation.navigate('Grade')}
      />
      <GreenViewBar></GreenViewBar>
    </AllBackground>
  );
};

export default Ex1;
