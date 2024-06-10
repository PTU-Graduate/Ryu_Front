/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import{Text, View} from 'react-native';
import{TouchableOpacity} from 'react-native-gesture-handler';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import SafeAreaView from 'react-native-safe-area-context';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllButtonCompoProps{
 children?:React.ReactNode; // 부모, 자식 관계를 선언해주는 것 touchableopacity나 textinput안의 text를 선언할 때
 text?:string;
}

/**
* 로그인 및 회원가입 화면에 사용되는 초록색 공통 버튼
*/
export const GreenViewBar: React.FC<AllButtonCompoProps>=({text})=>{
    return(
        <View style={{
            alignItems:'center',
        }}>
        <View style ={{
            backgroundColor:'#49b08c',
            width:deviceWidth*0.9,
            height:deviceHeight*0.05,
            position:'absolute',
        }}>
            <Text style ={[AllTextStyles.SemiBold20,{color:'#ffffff', marginLeft:deviceWidth*0.065,marginTop:deviceHeight*0.009}]}>{text}</Text>
        </View>
        <View style ={{
            backgroundColor:'#009b64',
            width:deviceWidth*0.03,
            height:deviceHeight*0.05,
            marginRight:deviceWidth*0.87,
        }}>
        </View>
        </View>
    )
}


