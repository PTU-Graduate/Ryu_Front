import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {
  FreeShuttleBusBar,
  MoneyShuttleBusBar,
} from '../../components/FreeShuttleBusComponet/FreeShuttleBusCompo';
import {FreeShuttleCategoryCompo} from '../../components/FreeShuttleBusComponet/FreeShuttleCategoryCompo';
import {ScreenProps} from '../../navigations/StackNavigator';

const FreeShuttleBus: React.FC<ScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('무료');
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        {selectedCategory === '무료' && (
          <AllTitleTopBarCompo
            text="셔 틀 버 스 시 간 조 회"
            onPress={() => navigation.goBack()}
          />
        )}
        {selectedCategory === '유료' && (
          <AllTitleTopBarCompo
            text="셔 틀 버 스 시 간 조 회"
            onPress={() => navigation.goBack()}
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <FreeShuttleCategoryCompo
          selectedCategory={selectedCategory} // 상태 공유
          setSelectedCategory={setSelectedCategory} // 상태 공유
        />
      </View>
      {selectedCategory === '무료' && (
        <View style={{flex: 9}}>
          <View style={{flex: 9, alignItems: 'center'}}>
            <View style={{flex: 7}}>
              <Text
                style={{
                  marginRight: deviceHeight * 0.1,
                  marginBottom: deviceWidth * 0.01,
                }}>
                운행노선 및 시간표 : 2024.3.4(월) ~ 6.20(목)
              </Text>
              <FreeShuttleBusBar
                titletext1="평택역"
                titletext2="학교 방면"
                detailtext="합정종합사회복지관 앞 버스정류장"
                detailtext1="08:50      09:00      09:50      10:00"
              />
              <View style={{marginTop: deviceWidth * 0.08}} />
              <FreeShuttleBusBar
                titletext1="학교"
                titletext2="평택역 방면"
                detailtext="교내 통학버스 승차장"
                detailtext1="15:00      16:00       17:00       18:30"
              />
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
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.02,
                  },
                ]}>
                *월 ~ 금요일 동일한 시간에 출발하며, 원활한 탑승을 위해 탑승시간
                5분 전에는 도착하여 대기해 주시기 바랍니다.
              </Text>
              <Text
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.005,
                  },
                ]}>
                *도착시간은 교통 및 기상상황 등에 따라 변동될 수 있습니다.
                통학버스
              </Text>
              <Text
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.005,
                  },
                ]}>
                *운행관련 문의 ( 학생지원팀 ) : 031 - 659 - 8425~27, (
                스위스관광 ) : 1661 - 1248
              </Text>
            </View>
          </View>
        </View>
      )}
      {selectedCategory === '유료' && (
        <View style={{flex: 9, alignItems: 'center'}}>
          <ScrollView>
            <View style={{flex: 7, alignItems: 'center'}}>
              <Text
                style={{
                  marginRight: deviceHeight * 0.1,
                  marginBottom: deviceWidth * 0.01,
                }}>
                운행노선 및 시간표 : 2024.3.4(월) ~ 6.20(목)
              </Text>
              <MoneyShuttleBusBar
                titletext1="안산"
                titletext2="학교 방면"
                detailtext="안산중앙역, 상록수역"
                detailtext1="안산중앙역 ( 07:30 )"
                detailtext2="상록수역 ( 07:40 )"
                detailtext3="4,000원"
              />
              <View style={{marginTop: deviceWidth * 0.08}} />
              <MoneyShuttleBusBar
                titletext1="판교 & 기흥"
                titletext2="학교 방면"
                detailtext="판교역, 기흥역"
                detailtext1="판교역 ( 07:50 )"
                detailtext2="기흥역 ( 08:15 )"
                detailtext3="3,00원"
              />
              <View style={{marginTop: deviceWidth * 0.08}} />
              <MoneyShuttleBusBar
                titletext1="영통 & 동탄"
                titletext2="학교 방면"
                detailtext="영통역, 동탄역"
                detailtext1="영통역 ( 08:00 )"
                detailtext2="동탄역 ( 08:20 )"
                detailtext3="2,500원"
              />
              <View style={{marginTop: deviceWidth * 0.05}}>
                <Text style={AllTextStyles.SemiBold14}>
                  버스 승차권 구입은 "
                  <Text style={{color: '#FF0000'}}>PAYCO 앱</Text>" 결제만
                  가능합니다.
                </Text>
              </View>
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
                  marginTop: deviceWidth * 0.04,
                }}></View>
              <Text
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.02,
                  },
                ]}>
                *월 ~ 금요일 동일한 시간에 출발하며, 원활한 탑승을 위해 탑승시간
                5분 전에는 도착하여 대기해 주시기 바랍니다.
              </Text>
              <Text
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.005,
                  },
                ]}>
                *도착시간은 교통 및 기상상황 등에 따라 변동될 수 있습니다.
                통학버스
              </Text>
              <Text
                style={[
                  AllTextStyles.medium12,
                  {
                    color: '#626262',
                    marginTop: deviceHeight * 0.005,
                  },
                ]}>
                *운행관련 문의 ( 학생지원팀 ) : 031 - 659 - 8425~27, (
                스위스관광 ) : 1661 - 1248
              </Text>
            </View>
          </ScrollView>
        </View>
      )}
    </AllBackground>
  );
};

export default FreeShuttleBus;
