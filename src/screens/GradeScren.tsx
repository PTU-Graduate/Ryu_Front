import React from 'react';
import { AllBackground } from '../components/AllSrcComponets/AllBackground';
import { AllTitleTopBarCompo } from '../components/MainSrcCompo/TopBarCompo';
import { View } from 'react-native';
import { SignGreenButton } from '../components/AllSrcComponets/AllButtonCompo';
import { GreenViewBar } from '../components/AllSrcComponets/AllViewBar';

const GradeScreen= () => {
  return (
    <AllBackground>
       <AllTitleTopBarCompo text='성적조회'></AllTitleTopBarCompo>
       <View style={{
        flex:2,
        backgroundColor:'#123433',
       }}><GreenViewBar text='전체 성적목록'></GreenViewBar>
        </View>
        <View style={{
            flex:5,
            backgroundColor:'#134333'

        }}></View>
    </AllBackground>
);
};
export default GradeScreen;