import {View, Text, DeviceEventEmitter} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {
  MoneyShuttleBusBar,
  ShuttleBusBar,
} from '../../components/FreeShuttleBusComponet/FreeShuttleBusCompo';

const FreeShuttleBus = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="셔틀버스 시간조회"></AllTitleTopBarCompo>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.19,
            height: deviceHeight * 0.036,
            alignItems: 'center',
            borderBottomWidth: 1.2,
            borderBottomColor: '#000000',
          }}>
          <Text>무료노선</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.19,
            height: deviceHeight * 0.036,
            alignItems: 'center',
            borderBottomWidth: 1.2,
            borderBottomColor: '#000000',
          }}>
          <Text>유료노선</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 4}}>
        <Text style={{marginLeft: deviceWidth * 0.05}}>
          운행노선 및 시간표 : 2024.3.4(월) ~ 6.20(목)
        </Text>
        <MoneyShuttleBusBar
          titletext="학교 -> 평택역방면"
          detailtext="교내 통학버스 승차장  "
          detailtext1="영통역 (08:20)"
          detailtext2="동탄역 (08:30)"
          detailtext3="2,500원"></MoneyShuttleBusBar>
      </View>
      <View
        style={{
          flex: 2,
          marginLeft: deviceWidth * 0.05,
          marginRight: deviceWidth * 0.05,
        }}>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.0029,
            backgroundColor: '#C9C6C6',
          }}></View>
        <Text
          style={{
            color: '#626262',
            marginTop: deviceHeight * 0.02,
          }}>
          *월 ~ 금요일 동일한 시간에 출발하며, 원활한 탑승을 위해 탑승시간 5분
          전에는 도착하여 대기해 주시기 바랍니다. 통학버스의 출발, 경유,
        </Text>
        <Text
          style={{
            color: '#626262',
          }}>
          *도착시간은 교통 및 기상상황 등에 따라 변동될 수 있습니다. 통학버스
        </Text>
        <Text
          style={{
            color: '#626262',
          }}>
          *운행관련 문의 ( 학생지원팀 ) : 031 - 659 - 8425~27, ( 스위스관광 ) :
          1661 - 1248
        </Text>
      </View>
    </AllBackground>
  );
};

export default FreeShuttleBus;
