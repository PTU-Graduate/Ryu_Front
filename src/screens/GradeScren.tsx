import React from 'react';
import { AllBackground } from '../components/AllSrcComponets/AllBackground';
import { AllTitleTopBarCompo } from '../components/MainSrcCompo/TopBarCompo';
import { View } from 'react-native';
import { SignGreenButton } from '../components/AllSrcComponets/AllButtonCompo';
import { GreenRoundBar, GreenViewBar } from '../components/AllSrcComponets/AllViewBar';

const GradeScreen= () => {
  return (
    <AllBackground>
       <AllTitleTopBarCompo text='성적조회'></AllTitleTopBarCompo>
       <View style={{
        flex:2,
        
       }}><GreenViewBar text='전체 성적목록'></GreenViewBar>
       <GreenRoundBar text1='성적조회'text2='성적조회'text3='성적조회'text4='성적조회'text5='4.5'text6='4.5'text7='4.5'text8='4.5'></GreenRoundBar>
        </View>
        <View style={{
            flex:5,
            backgroundColor:'#134333'

        }}></View>
        
    </AllBackground>
);
};
export default GradeScreen;