import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiPass: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="비밀번호"
        smalltext="를 입력해주세요."
        inputtext="비밀번호"
        onPress={() => navigation.navigate('RegiEmail')}
      />
    </AllBackground>
  );
};

export default RegiPass;
