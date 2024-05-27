import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {SignGreenButton} from '../../components/AllSrcComponets/AllButtonCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScreenProps} from '../../navigations/StackNavigator';
import LoginScreen from '../LoginScreen';

const RegiComple: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: deviceWidth * 0.45,
            height: deviceHeight * 0.125,
          }}
          resizeMode="contain"
          source={require('../../assets/images/Checklogo.png')}></Image>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={AllTextStyles.SemiBold14}>회원가입이 완료되었습니다.</Text>
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <SignGreenButton
          onPress={() => navigation.navigate('LoginScreen')}
          text="완료"></SignGreenButton>
      </View>
    </SafeAreaView>
  );
};

export default RegiComple;
