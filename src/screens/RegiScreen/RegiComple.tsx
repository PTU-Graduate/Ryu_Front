import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import { SignLogGreenButton } from '../../components/AllSrcComponets/AllButtonCompo';
import { deviceHeight, deviceWidth } from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
const RegiComple = () => {
  return (
    <SafeAreaView style ={{
      flex:1
    }}>
      <View
      style={{
        flex:4,
        justifyContent:"flex-end",
        alignItems:"center",


      }}>
       <Image style={{
        width:deviceWidth*0.45,
        height:deviceHeight*0.125,
       }} resizeMode='contain' source={require('../../assets/images/Checklogo.png')}></Image>
    </View>
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",

    }}><Text style={
      AllTextStyles.SemiBold14
      
    }>회원가입이 완료되었습니다.</Text></View>
    <View style={{
      flex:4,
      justifyContent:"flex-start",
      alignItems:"center",
    }}><SignLogGreenButton text="다음"></SignLogGreenButton></View>
    </SafeAreaView>
    
  );
};

export default RegiComple;
