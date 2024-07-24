import {View} from 'react-native';
import React from 'react';
import {
  AllBackground,
  AllScrollBackground,
} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {GreenViewBar} from '../../components/AllSrcComponets/AllViewBar';
import {CCDetailBar} from '../../components/CouresewCheckComponents/CourseCheckCompo';

const CourseCheck = () => {
  return (
    <AllScrollBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="수 강 조 회" />
      </View>
      <View style={{flex: 1, backgroundColor: '#456'}}>
        <GreenViewBar text="2024년도 1학기" />
      </View>
      <View style={{flex: 9, backgroundColor: '#222'}}>
        <CCDetailBar
          titleText="리더쉽"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="목요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="2학점"
          coursetext="재수강"
        />
        <CCDetailBar
          titleText="사건으로보는한국근현대사의이해"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="수요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="2학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="객체지향소프트웨어공학"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="전공"
          dateText="화요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="1학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
        <CCDetailBar
          titleText="P-MOOC(디지털시대의커뮤니케이션)"
          detailText="건병하 교수님, 9:30~11:30, 이108"
          refinText="교양"
          dateText="월요일"
          stdnumText="학수번호:02650-01"
          gradeText="전필/1학년"
          creditText="3학점"
          coursetext="수강"
        />
      </View>
    </AllScrollBackground>
  );
};
export default CourseCheck;
