import {View, Text} from 'react-native';
import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiEmail: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        smalltext="이메일"
        onpress={() => navigation.navigate('RegiCodeConfig')}
      />
    </AllBackground>
  );
};

export default RegiEmail;
