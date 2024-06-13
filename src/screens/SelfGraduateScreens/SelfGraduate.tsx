import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {Text, Touchable, View} from 'react-native';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {SelfGraduatetTextbar} from '../../components/SelfGraduateCompo/SelfGraduateCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SelfGraduate = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="졸 업 자 가 진 단" />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 320,
            height: 240,
            alignContent: 'space-around',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar
              titletext="입학구분"
              detailtext="신입학"></SelfGraduatetTextbar>
            <SelfGraduatetTextbar
              titletext="등록/이수학기"
              detailtext="5/4"></SelfGraduatetTextbar>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar
              titletext="학위과정"
              detailtext="학사"></SelfGraduatetTextbar>
            <SelfGraduatetTextbar
              titletext="조기졸업여부"
              detailtext="N"></SelfGraduatetTextbar>
          </View>
          <SelfGraduatetTextbar
            titletext="소속학과"
            detailtext="IT공과대학 정보통신학과"></SelfGraduatetTextbar>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar
              titletext="기타전공"
              detailtext="이수포기여부"></SelfGraduatetTextbar>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: deviceWidth * 0.05,
              }}>
              <View
                style={{
                  width: deviceWidth * 0.044,
                  height: deviceHeight * 0.025,
                  backgroundColor: '#C9C6C6',
                  borderRadius: 50,
                }}></View>
              <Text
                style={[
                  AllTextStyles.SemiThin16,
                  {marginLeft: deviceWidth * 0.02},
                ]}>
                이수
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: deviceWidth * 0.05,
              }}>
              <View
                style={{
                  width: deviceWidth * 0.044,
                  height: deviceHeight * 0.025,
                  backgroundColor: '#C9C6C6',
                  borderRadius: 50,
                }}></View>
              <Text
                style={[
                  AllTextStyles.SemiThin16,
                  {marginLeft: deviceWidth * 0.02},
                ]}>
                포기
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: deviceWidth * 0.23,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={AllTextStyles.SemiThin16}>전공유형</Text>
            <Text style={AllTextStyles.SemiThin16}>심화트랙 (전공심화)</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: deviceWidth * 0.23,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={AllTextStyles.SemiThin16}>기타전공학과</Text>
            <Text style={AllTextStyles.SemiThin16}>-</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                width: deviceWidth * 0.35,
                height: deviceHeight * 0.05,
                backgroundColor: '#009B64',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[AllTextStyles.medium16, {color: '#FFFFFF'}]}>
                졸업자가진단 시작
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.002,
            backgroundColor: '#979797',
            marginTop: deviceHeight * 0.022,
          }}></View>
      </View>
    </AllBackground>
  );
};

export default SelfGraduate;
