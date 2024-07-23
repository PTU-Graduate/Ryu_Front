import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

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

const Schedule = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="학 사 일 정" />
      </View>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
        <Calendar
          style={{
            width: deviceWidth * 0.9,
            borderRadius: 20,
            paddingBottom: deviceHeight * 0.01,
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
              <Icon name="left" size={15} />
            ) : (
              <Icon name="right" size={15} />
            )
          }></Calendar>
      </View>
      <View style={{flex: 5}}>
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
            }}></View>
        </View>
        <View style={{marginLeft: deviceWidth * 0.05}}>
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                AllTextStyles.SemiBold14,
                {
                  color: '#009B64',
                  marginLeft: deviceWidth * 0.02,
                  marginBottom: deviceHeight * 0.005,
                },
              ]}>
              01.19 ~ 06.20
            </Text>
            <Text
              style={[
                AllTextStyles.medium13,
                {
                  marginLeft: deviceWidth * 0.1,
                  marginBottom: deviceHeight * 0.005,
                },
              ]}>
              수업계획서 조회기간
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#009B64',
              width: deviceWidth * 0.9,
              height: deviceHeight * 0.0008,
            }}></View>
        </View>
      </View>
    </AllBackground>
  );
};

export default Schedule;
