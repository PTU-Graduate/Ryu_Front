import React from 'react';
import {View} from 'react-native';
import {
  AllBackground,
  AllScrollBackground,
} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {
  AllScoreDetailBar,
  GreenViewBar,
  ScoreSemesterDetailBar,
} from '../../components/AllSrcComponets/AllViewBar';
import {deviceHeight} from '../../utils/DeviceUtils';

const Grade = () => {
  return (
    <AllScrollBackground srcbottom={0.1}>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="성 적 조 회"></AllTitleTopBarCompo>
      </View>
      <View
        style={{
          flex: 2,
        }}>
        <GreenViewBar text="전체 성적목록"></GreenViewBar>
        <AllScoreDetailBar
          titletext1="신청학점"
          titletext2="취득학점"
          titletext3="평점"
          titletext4="백분율"
          detailtext1="201"
          detailtext2="119"
          detailtext3="3.9"
          detailtext4="92.00"
        />
      </View>
      <View style={{flex: 5}}>
        <View style={{marginTop: deviceHeight * 0.03}}>
          <GreenViewBar text="2024년 1학기"></GreenViewBar>
          <ScoreSemesterDetailBar
            titletext1="경건실천"
            titletext2="신문으로보는경제이야기"
            titletext3="이슈로읽는한국정치"
            detailtext1="P"
            detailtext2="A+"
            detailtext3="A+"
          />
          <ScoreSemesterDetailBar
            titletext1="영화로보는한국사"
            titletext2="기업가정신"
            titletext3="P-MOOC(고대그리스신화와문화세계)"
            detailtext1="B+"
            detailtext2="P"
            detailtext3="P"
          />
          <ScoreSemesterDetailBar
            titletext1="인터넷구조"
            titletext2="인터넷보안"
            titletext3="컴퓨터구조"
            detailtext1="A"
            detailtext2="A+"
            detailtext3="A"
          />
          <ScoreSemesterDetailBar
            titletext1="통신프로그래밍응용"
            detailtext1="A"
          />
        </View>
      </View>
    </AllScrollBackground>
  );
};
export default Grade;
