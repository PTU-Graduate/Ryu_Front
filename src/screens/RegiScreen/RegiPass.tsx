import {View, Text} from 'react-native';
import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiPass: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        smalltext="비밀번호"
        onpress={() => navigation.navigate('RegiEmail')}
      />
    </AllBackground>
  );
};

export default RegiPass;
