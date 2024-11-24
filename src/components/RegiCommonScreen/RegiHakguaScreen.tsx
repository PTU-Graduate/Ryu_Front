/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, Image, TextInputProps} from 'react-native';
import React from 'react';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {SignGreenButton} from '../AllSrcComponets/AllButtonCompo';
import HukguaDropdown from '../DropDownComponets/HakguaDropDownComponets/HakguaDropDownCompo';

interface RegiCommonScreen extends TextInputProps {
  mediumtext: string;
  smalltext: string;
  inputtext: string;
  onPress?: () => void;
}

export const RegiHakguaScreen: React.FC<RegiCommonScreen> = ({
  mediumtext,
  smalltext,
  inputtext,
  onPress,
  ...props
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: deviceWidth * 0.05,
        marginRight: deviceWidth * 0.05,
      }}>
      <View
        style={{
          position: 'absolute',
          marginLeft: deviceWidth * 0.005,
          marginTop: deviceHeight * 0.135,
        }}>
        <Image
          source={require('../../assets/images/PtuLogo.png')}
          style={{
            resizeMode: 'contain',
            opacity: 0.12,
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.5,
          }}
        />
      </View>
      <View style={{flex: 3}}>
        <View style={{marginTop: deviceHeight * 0.22}}>
          <Text
            style={{
              color: '#009b64',
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: deviceHeight * 0.01,
            }}>
            회원가입
          </Text>
          <Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{mediumtext}</Text>
            <Text style={{fontSize: 15}}>{smalltext}</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 7,
          alignItems: 'center',
        }}>
        <View style={{marginTop: deviceHeight * 0.07}}>
          <View style={{zIndex: 2}}>
            <HukguaDropdown />
          </View>
          <View
            style={{
              marginTop: deviceHeight * 0.073,
              marginLeft: deviceWidth * 0.05,
              zIndex: 1,
            }}>
            <SignGreenButton text="다음" onPress={onPress} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
