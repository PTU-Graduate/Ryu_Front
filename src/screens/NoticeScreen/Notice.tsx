/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {Text, View} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

const Notice: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{}}>
          <Icon
            style={{
              marginRight: 120,
            }}
            name="left"
            size={deviceWidth * 0.06}
          />
        </TouchableOpacity>
        <Text style={AllTextStyles.SemiBold17}>공지사항</Text>
      </View>
      <View style={{flex: 1}} />
    </AllBackground>
  );
};

export default Notice;
