/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceWidth} from '../../utils/DeviceUtils';
import {NoticeCategoryCompo} from '../../components/NoticeSrcComponets/NoticeCategoryCompo';

const Notice: React.FC<ScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('공지사항');
  return (
    <AllBackground>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>공지사항</Text>
      </View>
      <NoticeCategoryCompo />
      <View style={{flex: 7}} />
    </AllBackground>
  );
};

export default Notice;
