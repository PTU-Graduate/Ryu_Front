import React from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiHakbun: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCkeckCommonScreen
        mediumtext="학번"
        smalltext="을 입력해주세요."
        inputtext="학번"
        CheckonPress={() => navigation.navigate('Ex1')}
        onPress={() => navigation.navigate('RegiName')}
      />
    </AllBackground>
  );
};

export default RegiHakbun;
