/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {SignLogGreenButton} from '../AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../AllSrcComponets/AllInputCompo';

interface RegiCommonScreen {
  mediumtext: string;
  smalltext: string;
  inputtext: string;
  onpress?: () => void;
}

export const RegiCommonScreen: React.FC<RegiCommonScreen> = ({
  mediumtext,
  smalltext,
  inputtext,
  onpress,
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
          alignItems: 'center',
          marginLeft: deviceWidth * 0.075,
          marginTop: deviceHeight * 0.063,
        }}>
        <Image
          source={require('../../assets/images/PtuLogo.png')}
          style={{
            resizeMode: 'contain',
            opacity: 0.08,
            width: deviceWidth * 0.75,
            height: deviceHeight * 0.65,
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
        <SignLogInput placeholderTextColor="#979797" placeholder={inputtext} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginLeft: deviceWidth * 0.05,
        }}>
        <SignLogGreenButton text="다음" onPress={onpress} />
      </View>
      <View style={{flex: 4}} />
    </SafeAreaView>
  );
};
