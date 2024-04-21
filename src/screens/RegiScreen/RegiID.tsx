import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiID: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="아이디"
        smalltext="를 입력해주세요."
        inputtext="아이디"
        onpress={() => navigation.navigate('RegiPass')}
      />
    </AllBackground>
  );
};

export default RegiID;
