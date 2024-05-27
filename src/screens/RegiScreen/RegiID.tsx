import React from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiID: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCkeckCommonScreen
        mediumtext="아이디"
        smalltext="를 입력해주세요."
        inputtext="아이디"
        CheckonPress={() => navigation.navigate('Ex1')}
        onPress={() => navigation.navigate('RegiPass')}
      />
    </AllBackground>
  );
};

export default RegiID;
