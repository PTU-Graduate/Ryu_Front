import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const userData = getUserData();
  return (
    <AllBackground>
      <View></View>
    </AllBackground>
  );
};

export default Home;
