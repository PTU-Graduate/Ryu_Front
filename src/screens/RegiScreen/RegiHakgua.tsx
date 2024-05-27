import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiHakgua: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="학과"
        smalltext="를 입력해주세요."
        inputtext="학과"
        onPress={() => navigation.navigate('RegiHakbun')}
      />
    </AllBackground>
  );
};

export default RegiHakgua;
