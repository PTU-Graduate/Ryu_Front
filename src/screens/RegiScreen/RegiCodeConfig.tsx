import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiCodeConfig: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="인증번호"
        smalltext="를 입력해주세요."
        inputtext="인증번호"
        onpress={() => navigation.navigate('RegiComple')}
      />
    </AllBackground>
  );
};

export default RegiCodeConfig;
