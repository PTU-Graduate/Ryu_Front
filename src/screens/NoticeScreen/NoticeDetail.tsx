import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScreenProps} from '../../navigations/StackNavigator';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {NoticeDeatilText} from '../../components/NoticeSrcComponets/NoticePostCompo';
import {NoticeDetailProp} from '../../utils/navigationProps/RegiNavigationProps';

const NoticeDetail: React.FC<NoticeDetailProp> = ({navigation, route}) => {
  const {MEMB_ID, IMG_CD, TIT, CONT, CRE_DATE, CRE_SEQ, category} =
    route.params;

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
          <Text style={{color: '#009B64'}}>{category}</Text> {TIT}
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
          {formatDate(CRE_DATE)}
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
            {IMG_CD ? (
              <Image
                style={{
                  width: deviceWidth * 0.9,
                  height: deviceWidth * 1.3,
                  resizeMode: 'contain',
                }}
                source={{uri: IMG_CD}} // IMG_CD가 존재하면 해당 링크 사용
              />
            ) : null}

            <NoticeDeatilText text={CONT} />
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
