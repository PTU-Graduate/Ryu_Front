/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, Image, TextInputProps} from 'react-native';
import React from 'react';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {SignCheckGreenButton} from '../AllSrcComponets/AllButtonCompo';
import {SignLogCheckInput} from '../AllSrcComponets/AllInputCompo';

interface RegiCommonScreen extends TextInputProps {
  mediumtext: string;
  smalltext: string;
  onPress?: () => void;
  CheckonPress?: () => void;
  disable?: boolean;
}

export const RegiCkeckCommonScreen: React.FC<RegiCommonScreen> = ({
  mediumtext,
  smalltext,
  onPress,
  CheckonPress,
  disable,
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
          flex: 1,
          position: 'absolute',
          marginLeft: deviceWidth * 0.035,
          marginTop: deviceHeight * 0.14,
        }}>
        <Image
          source={require('../../assets/images/PtuLogo.png')}
          style={{
            resizeMode: 'contain',
            opacity: 0.12,
            width: deviceWidth * 0.83,
            height: deviceHeight * 0.5,
          }}
        />
      </View>
      <View style={{flex: 2}} />
      <View
        style={{
          flex: 1,
        }}>
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
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <SignLogCheckInput onPress={CheckonPress} {...props} />
      </View>
      <View
        style={{
          flex: 2,
          marginLeft: deviceWidth * 0.05,
        }}>
        <SignCheckGreenButton text="다음" onPress={onPress} disable={disable} />
      </View>
      <View style={{flex: 3}} />
    </SafeAreaView>
  );
};
