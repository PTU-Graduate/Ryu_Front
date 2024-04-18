import {View, Text} from 'react-native';
import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiCodeConfig: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        smalltext="인증번호"
        onpress={() => navigation.navigate('RegiComple')}
      />
    </AllBackground>
  );
};

export default RegiCodeConfig;
