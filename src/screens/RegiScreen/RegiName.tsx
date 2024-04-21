import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiName: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="이름"
        smalltext="을 입력해주세요."
        inputtext="이름"
        onpress={() => navigation.navigate('RegiID')}
      />
    </AllBackground>
  );
};

export default RegiName;
