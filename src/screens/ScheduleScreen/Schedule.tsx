import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScaleFromCenterAndroidSpec} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import {ScreenProps} from '../../navigations/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import {ScheduleText} from '../../components/ScheduleComponent/ScheduleCompo';

LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'kr';

const Schedule: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="학 사 일 정"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 10, alignItems: 'center'}}>
        <Calendar
          style={{
            width: deviceWidth * 0.9,
            borderRadius: 20,
            paddingBottom: deviceHeight * 0.005,
          }}
          theme={{
            textDayFontSize: 16,
            textDayHeaderFontSize: 15,
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '500',
            textDayFontWeight: '400',
            calendarBackground: '#F3F3F3',
            todayBackgroundColor: '#FF0000',
            todayTextColor: '#ffffff',
          }}
          onDayPress={day => {
            console.log(day);
          }}
          hideExtraDays={true}
          monthFormat="yyyy년 M월"
          markedDates={{
            '2024-07-14': {
              marked: true,
              dotColor: '#009B64',
              activeOpacity: 0,
            },
          }}
          renderArrow={direction =>
            direction === 'left' ? (
              <Icon name="left" size={13} />
            ) : (
              <Icon name="right" size={13} />
            )
          }></Calendar>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Icon2
              style={{
                color: '#C9C6C6',
                marginTop: deviceHeight * 0.005,
                marginBottom: deviceHeight * 0.005,
              }}
              name="chevron-up"
              size={30}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#C9C6C6',
              width: deviceWidth * 0.9,
              height: deviceHeight * 0.002,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: deviceWidth * 0.05,
            flex: 1,
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold14,
              {
                marginTop: deviceHeight * 0.02,
                marginBottom: deviceHeight * 0.03,
                marginLeft: deviceWidth * 0.02,
              },
            ]}>
            2024년 7월 13일
          </Text>
          <ScrollView>
            <ScheduleText
              titleText="05.20 ~ 12.27"
              detailText="교과목 개설기간(시작종료일)"
            />
            <ScheduleText
              titleText="06.10 ~ 12.26"
              detailText="소프트웨어 설치현황조회기간"
            />
            <ScheduleText
              titleText="06.17 ~ 12.27"
              detailText="수업시간표 조회기간"
            />
            <ScheduleText
              titleText="06.17 ~ 12.27"
              detailText="교수시간표 조회기간"
            />
            <ScheduleText
              titleText="07.15 ~ 12.26"
              detailText="수업계획서 조회기간"
            />
            <ScheduleText
              titleText="07.15 ~ 12.26"
              detailText="개설교과목(수강) 조회기간"
            />
            <ScheduleText
              titleText="08.21 ~ 12.26"
              detailText="미수강신청자 조회기간"
            />
            <ScheduleText
              titleText="08.29 ~ 12.26"
              detailText="출석 등록 및 조회기간"
            />
            <ScheduleText
              titleText="08.29 ~ 12.26"
              detailText="출석부 출력 기간"
            />
            <ScheduleText
              titleText="09.01 ~ 12.31"
              detailText="High-up 장학신청기간"
            />
            <ScheduleText
              titleText="09.01 ~ 12.06"
              detailText="i+솔선수범포인트입력기간"
            />
            <ScheduleText
              titleText="09.01 ~ 12.13"
              detailText="i+솔선수범포인트조회기간"
            />
            <ScheduleText
              titleText="09.01 ~ 12.27"
              detailText="근로장학출석등록기간"
            />
          </ScrollView>
        </View>
      </View>
    </AllBackground>
  );
};

export default Schedule;
