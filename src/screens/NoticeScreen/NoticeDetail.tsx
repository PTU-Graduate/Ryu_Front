/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScreenProps} from '../../navigations/StackNavigator';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {NoticeDeatilText} from '../../components/NoticeSrcComponets/NoticePostCompo';

const NoticeDetail: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="공 지 사 항"
          onPress={() => navigation.navigate('Notice')}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={[AllTextStyles.SemiBold16, {width: deviceWidth * 0.91}]}>
          <Text style={{color: '#009B64'}}>[공지]</Text> 모바일 학사정보시스템
          [헤이영 캠퍼스] 오픈 안내
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
          2024.03.07
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
            <Image
              style={{
                width: deviceWidth * 0.9,
                height: deviceWidth * 1.3,
                resizeMode: 'contain',
              }}
              source={require('../../assets/images/NoticeDetail.jpeg')}
            />
            <NoticeDeatilText
              text="
              2024-2학기를 맞이하여 스마트한 대학생활 필수앱 '헤이영 캠퍼스'를
              도입합니다!"
            />
            <NoticeDeatilText
              text="헤이영 캠퍼스는 전자 확인증(모바일 학생증), (시간표, 성적, 장학
              등) 조회, 도서관 이용 등 대학 생활에 꼭 필요한 기능들을 사용하실
              수 있습니다."
            />
            <Text
              style={[
                AllTextStyles.SemiBold20,
                {marginTop: deviceWidth * 0.05},
              ]}>
              헤이영시스템 소개 및 메뉴얼 확인
            </Text>
            <Text style={AllTextStyles.SemiThin15}>
              모바일 확인증(학생증), 학사행정 조회 등 대학생활 필수 서비스를
              통합하여 제공하는 우리대학 대표 앱입니다.
            </Text>
            <Text style={AllTextStyles.SemiThin15}>
              * 해당 앱은 우리대학과 신한은행 간 모바일 통합 앱 구축을 위한
              전략적 업무협약에 따라 개발되었습니다."
            </Text>
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

export default NoticeDetail;
