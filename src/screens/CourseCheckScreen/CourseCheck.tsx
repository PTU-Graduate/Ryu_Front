import {Text, View} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {CCDetailBar} from '../../components/CourseCheckComponents/CourseCheckCompo';
import {ScrollView} from 'react-native-gesture-handler';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

const CourseCheck: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="수 강 조 회"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text
          style={[AllTextStyles.SemiBold17, {marginLeft: deviceWidth * 0.055}]}>
          2024년
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold17,
            {color: '#009B64', marginLeft: deviceWidth * 0.02},
          ]}>
          1학기
        </Text>
      </View>
      <View style={{flex: 9, marginTop: deviceHeight * -0.04}}>
        <ScrollView>
          <CCDetailBar
            titleText="경건실천"
            detailText="교목실, 14:30, 피301"
            refinText="대교"
            dateText="수요일"
            stdnumText="학수번호:00020-05"
            gradeText="대교/2학년"
            creditText="0학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="인터넷구조"
            detailText="이경희 교수님, 15:30~18:30, 이503"
            refinText="전공"
            dateText="수요일"
            stdnumText="학수번호:01583-01"
            gradeText="전선/1학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="인터넷보안"
            detailText="변진욱 교수님, 9:30~11:30, 이501"
            refinText="전공"
            dateText="월요일"
            stdnumText="학수번호:00020-01"
            gradeText="전선/2학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="컴퓨터구조"
            detailText="이진 교수님, 14:30~17:30, 이501"
            refinText="전공"
            dateText="화요일"
            stdnumText="학수번호:03457-01"
            gradeText="전선/2학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="통신프로그래밍응용"
            detailText="문필주 교수님, 10:30~13:30, 이503"
            refinText="전공"
            dateText="화요일"
            stdnumText="학수번호:00834-01"
            gradeText="전필/2학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="이슈로읽는한국정치"
            detailText="임상순 교수님, 15:30~17:30, 이109"
            refinText="교양"
            dateText="목요일"
            stdnumText="학수번호:01583-01"
            gradeText="교선/1~4학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="사랑과삶"
            detailText="김수경 교수님, 9:30~11:30, 이108"
            refinText="교양"
            dateText="목요일"
            stdnumText="학수번호:02650-01"
            gradeText="교선/1~4학년"
            creditText="2학점"
            coursetext="재수강"
          />
          <CCDetailBar
            titleText="사건으로보는한국근현대사의이해"
            detailText="건병하 교수님, 9:30~11:30, 이108"
            refinText="교양"
            dateText="수요일"
            stdnumText="학수번호:02650-01"
            gradeText="교선/1학년"
            creditText="2학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="객체지향소프트웨어공학"
            detailText="이경희 교수님, 9:30~11:30, 이108"
            refinText="전공"
            dateText="화요일"
            stdnumText="학수번호:02650-01"
            gradeText="전선/1학년"
            creditText="3학점"
            coursetext="수강"
          />
          <CCDetailBar
            titleText="P-MOOC(디지털시대의커뮤니케이션)"
            detailText="교수학습지원센터"
            refinText="교양"
            dateText="-"
            stdnumText="학수번호:02650-01"
            gradeText="교선/1~4학년"
            creditText="1학점"
            coursetext="수강"
          />
        </ScrollView>
      </View>
    </AllBackground>
  );
};
export default CourseCheck;
