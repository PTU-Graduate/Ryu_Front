import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInputProps,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {SignCheckGreenButton} from '../AllSrcComponets/AllButtonCompo';
import {
  SignLogCheckInput,
  SignLogInput,
} from '../AllSrcComponets/AllInputCompo';

interface RegiCommonScreen extends TextInputProps {
  mediumtext: string;
  smalltext: string;
  onPress?: () => void;
  CheckonPress?: () => void;
  disable?: boolean;
  isLoading?: boolean; // 로딩 상태 추가
  inputtext: string;
  errorMessage: string | null;
}

export const RegiEmailScreen: React.FC<RegiCommonScreen> = ({
  mediumtext,
  smalltext,
  onPress,
  CheckonPress,
  disable,
  isLoading, // 로딩 상태를 받음
  inputtext,
  errorMessage,
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
        <View style={{marginTop: deviceHeight * 0.073}}>
          <SignLogInput
            placeholderTextColor="#979797"
            placeholder={inputtext}
            {...props}
          />
          {errorMessage && (
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginTop: 10, // 인풋 아래에 텍스트 추가
              }}>
              {errorMessage}
            </Text>
          )}
          <View
            style={{
              marginTop: deviceHeight * 0.073,
              marginLeft: deviceWidth * 0.05,
            }}>
            <SignCheckGreenButton
              text={
                isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  '다음'
                )
              } // 로딩 중이면 ActivityIndicator, 아니면 '다음'
              onPress={onPress}
              disable={disable}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
