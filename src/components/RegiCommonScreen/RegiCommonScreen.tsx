import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {AllBackground} from '../AllSrcComponets/AllBackground';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {SignLogGreenButton} from '../AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../AllSrcComponets/AllInputCompo';

interface RegiCommonScreen {
  smalltext: string;
  onpress?: () => void;
}

export const RegiCommonScreen: React.FC<RegiCommonScreen> = ({
  smalltext,
  onpress,
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: deviceWidth * 0.05,
        marginRight: deviceWidth * 0.05,
      }}>
      <View style={{flex: 2}} />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: '#009b64',
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: deviceHeight * 0.01,
          }}>
          회원가입
        </Text>
        <Text>
          <Text style={{fontSize: 25}}>{smalltext}</Text>를 입력해주세요
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <SignLogInput text="학과" />
      </View>
      <View style={{flex: 1}}></View>
      <View
        style={{
          flex: 1,
          marginLeft: deviceWidth * 0.05,
          justifyContent: 'flex-end',
        }}>
        <SignLogGreenButton text="다음" onPress={onpress} />
      </View>
      <View style={{flex: 4}}></View>
    </SafeAreaView>
  );
};
