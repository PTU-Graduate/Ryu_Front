import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {Text} from 'react-native';
const ScholarshipInfo: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <Text>장학안내</Text>
    </AllBackground>
  );
};

export default ScholarshipInfo;
