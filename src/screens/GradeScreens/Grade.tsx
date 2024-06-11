import React from 'react';
import {View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {
  GreenRoundBar,
  GreenViewBar,
} from '../../components/AllSrcComponets/AllViewBar';

const Grade = () => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo text="성적조회"></AllTitleTopBarCompo>
      <View
        style={{
          flex: 2,
        }}>
        <GreenViewBar text="전체 성적목록"></GreenViewBar>
        <GreenRoundBar
          titletext1="성적조회"
          titletext2="취득학점"
          titletext3="평점"
          titletext4="백분율"
          detailtext1="113"
          detailtext2="113"
          detailtext3="3.95"
          detailtext4="92.00"></GreenRoundBar>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: '#134333',
        }}></View>
    </AllBackground>
  );
};
export default Grade;
