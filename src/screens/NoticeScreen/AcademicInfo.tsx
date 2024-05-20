import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {Text} from 'react-native';
const AcademicInfo: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <Text>학사안내</Text>
    </AllBackground>
  );
};

export default AcademicInfo;