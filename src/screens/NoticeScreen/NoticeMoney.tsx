/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScreenProps} from '../../navigations/StackNavigator';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {NoticeDeatilText} from '../../components/NoticeSrcComponets/NoticePostCompo';
import {NoticeDetailProp} from '../../utils/navigationProps/RegiNavigationProps';

const NoticeMoney: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="장 학 안 내"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={[AllTextStyles.SemiBold16, {width: deviceWidth * 0.91}]}>
          <Text style={{color: '#009B64'}}>
            2024학년도 High-Up 장학 운영 안내
          </Text>
        </Text>
        <Text
          style={[
            AllTextStyles.medium9,
            {
              color: '#666666',
              marginLeft: deviceWidth * 0.77,
              marginTop: deviceHeight * 0.01,
            },
          ]}>
          2024.03.19
        </Text>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceWidth * 0.004,
            backgroundColor: '#CDCDCD',
            marginTop: deviceHeight * 0.005,
          }}
        />
      </View>
      <View style={{flex: 7, alignItems: 'center'}}>
        <View style={{width: deviceWidth * 0.9}}>
          <ScrollView>
            <View>
              <Text style={AllTextStyles.SemiBold14}>
                2024학년도 High-Up 장학 운영과 관련하여 아래와 같이 안내하오니
                관심 있는 학생은 해당 부서로 신청 후 참여하기 바랍니다.
              </Text>
              <View style={{marginTop: deviceHeight * 0.005}}>
                <Image
                  style={{
                    width: deviceWidth * 0.9,
                    height: deviceHeight * 0.36,
                  }}
                  source={require('../../assets/images/MoneyMoney.jpg')}></Image>
              </View>
              <View style={{marginTop: deviceWidth * 0.05}} />
              <Text style={AllTextStyles.SemiBold16}>
                ■ High-Up 장학 운영일정
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                가. 신청기간 : 2024년 3월중(부서별 상이, 해당부서 확인 요)
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                나. 활동기간 : 2024. 3월 ~ 10월까지
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                다. 서류제출 기간 : 2024. 11월초(부서별 상이, 해당부서 확인 요)
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                라. 장학금 지급 : 12월초 예정
              </Text>
              <View style={{marginTop: deviceWidth * 0.04}} />
              <Text style={AllTextStyles.SemiBold16}>
                ■ High-Up 장학 운영세칙 및 유의사항
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                가. High-Up장학금은 1년 단위로 운영되는 장학제도로 2024-2학기
                재학중이어야 장학금 수혜 가능
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                (※ 2024년 8월 졸업예정자 및 정규학기 초과자(졸업유예자 또는
                유급자)의 경우 신청 불가하며, 학적변동자(휴학 또는 자퇴)의 경우
                장학수혜 불가)
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                나. 등록금 범위 초과하여 수혜 가능(대가성 장학으로 인정)
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                다. 자격증 취득, 외국어인증 인정 기간은
                2023.11.1.~2024.10.31.까지 실적을 인정함.
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                (※ 신(편)입생의 경우, 2024.3.1.~10.31.까지의 실적을 인정함)
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                라. 장학금은 e학사정보에 입력된 학생 명의의 계좌로 지급
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                마. 각 프로그램별 담당부서 및 제출 서류는 첨부파일 참조
              </Text>
              <Text style={AllTextStyles.SemiBold14}>
                바. 기타 문의사항은 각 담당부서로 연락요망
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceWidth * 0.02,
            backgroundColor: '#F4F4F4',
            marginTop: deviceWidth * 0.04,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: deviceHeight * 0.03,
          }}>
          <Text style={AllTextStyles.SemiBold11}>이전 글</Text>
          <TouchableOpacity>
            <Text
              style={[
                AllTextStyles.SemiThin11,
                {marginLeft: deviceWidth * 0.05, width: deviceWidth * 0.7},
              ]}>
              2024년 평택대학교 대학안전관리 계획 안내
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: deviceWidth * 0.02,
              height: deviceWidth * 0.02,
              backgroundColor: '#D9D9D9',
              marginTop: deviceWidth * 0.0089,
              marginLeft: deviceWidth * 0.05,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: deviceHeight * 0.025,
          }}>
          <Text style={AllTextStyles.SemiBold11}>다음 글</Text>
          <TouchableOpacity>
            <Text
              style={[
                AllTextStyles.SemiThin11,
                {marginLeft: deviceWidth * 0.05, width: deviceWidth * 0.7},
              ]}>
              e-학사정보시스템 로그인 시 2차인증 적용 안내
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: deviceWidth * 0.02,
              height: deviceWidth * 0.02,
              backgroundColor: '#D9D9D9',
              marginTop: deviceWidth * 0.0089,
              marginLeft: deviceWidth * 0.05,
            }}
          />
        </View>
      </View>
    </AllBackground>
  );
};

export default NoticeMoney;
