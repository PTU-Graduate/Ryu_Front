import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiEmail: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="평택대학교 이메일"
        smalltext="을 입력해주세요."
        inputtext="평택대학교 이메일@ptu.ac.kr"
        onPress={() => navigation.navigate('RegiCodeConfig')}
      />
    </AllBackground>
  );
};

export default RegiEmail;
