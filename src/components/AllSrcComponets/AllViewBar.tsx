/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import{Text, View} from 'react-native';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

interface AllViewBarProps{
    text?:string;
    text1?:string;
    text2?:string;
    text3?:string;
    text4?:string;
    text5?:string;
    text6?:string;
    text7?:string;
    text8?:string;
}

/**
* 조회기능에 들어가는 상세내용 초록색바
*/
export const GreenViewBar: React.FC<AllViewBarProps>=({text})=>{
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

export const GreenRoundBar: React.FC<AllViewBarProps>=({text1,text2,text3,text4,text5,text6,text7,text8})=>{
    return(
        <View style={{
            alignItems:'center',
        }}>
        <View style ={{
            backgroundColor:'#009b64',
            width:deviceWidth*0.9,
            height:deviceHeight*0.05,
            flexDirection:'row',
            borderRadius:6,
            marginTop:deviceHeight*0.035,
            justifyContent:"space-between",
            paddingRight:deviceWidth*0.06,
            paddingLeft:deviceWidth*0.06,
            paddingTop:deviceWidth*0.03,
            paddingBottom:deviceWidth*0.03,
            

        }}>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#ffffff'}]}>{text1}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#ffffff'}]}>{text2}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#ffffff'}]}>{text3}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#ffffff'}]}>{text4}</Text>
        </View>
        <View style={{
            alignItems:'center',
            borderBottomColor:'#000000',
            width:deviceWidth*0.9,
            height:deviceHeight*0.05,
            borderBottomWidth:0.19,
            
            flexDirection:'row',
            justifyContent:"space-between",
            paddingRight:deviceWidth*0.092,
            paddingLeft:deviceWidth*0.092,
            
            
           

            
        }}>
             <Text style ={[AllTextStyles.SemiBold14,{color:'#000000'}]}>{text5}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#000000'}]}>{text6}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#000000'}]}>{text7}</Text>
            <Text style ={[AllTextStyles.SemiBold14,{color:'#000000'}]}>{text8}</Text>
        </View>
        </View>
    )
}

