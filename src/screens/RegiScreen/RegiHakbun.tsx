import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiHakbun: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="학번"
        smalltext="을 입력해주세요."
        inputtext="학번"
        onpress={() => navigation.navigate('RegiName')}
      />
    </AllBackground>
  );
};

export default RegiHakbun;
