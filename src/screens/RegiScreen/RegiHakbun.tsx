import {View, Text} from 'react-native';
import React from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
const RegiHakbun: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <RegiCommonScreen
        smalltext="학번"
        onpress={() => navigation.navigate('RegiName')}
      />
    </AllBackground>
  );
};

export default RegiHakbun;
