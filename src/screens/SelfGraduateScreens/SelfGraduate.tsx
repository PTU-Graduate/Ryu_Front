import React, {useCallback, useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {Text, View, TouchableOpacity} from 'react-native';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {
  SelfGraduateDetailBar,
  SelfGraduatetTextbar,
} from '../../components/SelfGraduateCompo/SelfGraduateCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScreenProps} from '../../navigations/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';

const SelfGraduate: React.FC<ScreenProps> = ({navigation}) => {
  const [state, setState] = useState<boolean>(false);

  const handlebut = () => {
    setState(true);
  };

  useFocusEffect(
    useCallback(() => {
      // 화면에 진입할 때의 동작 (필요 시 추가)
      return () => {
        setState(false); // 화면 떠날 때 실행
      };
    }, []),
  );

  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="졸 업 자 가 진 단"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: deviceWidth * 0.85,
            height: deviceHeight * 0.35,
            justifyContent: 'space-between',
            marginTop: deviceHeight * 0.01,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar titletext="입학구분" detailtext="신입학" />
            <SelfGraduatetTextbar titletext="등록/이수학기" detailtext="5/4" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar titletext="학위과정" detailtext="학사" />
            <SelfGraduatetTextbar titletext="조기졸업여부" detailtext="N" />
          </View>
          <SelfGraduatetTextbar
            titletext="소속학과"
            detailtext="IT공과대학 정보통신학과"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SelfGraduatetTextbar
              titletext="기타전공"
              detailtext="이수포기여부"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: deviceWidth * 0.05,
              }}>
              <View
                style={{
                  width: deviceWidth * 0.047,
                  height: deviceHeight * 0.024,
                  backgroundColor: '#C9C6C6',
                  borderRadius: 10,
                }}></View>
              <Text
                style={[
                  AllTextStyles.SemiThin15,
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
                  width: deviceWidth * 0.047,
                  height: deviceHeight * 0.024,
                  backgroundColor: '#C9C6C6',
                  borderRadius: 10,
                }}></View>
              <Text
                style={[
                  AllTextStyles.SemiThin15,
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
            <Text style={AllTextStyles.SemiThin15}>전공유형</Text>
            <Text style={AllTextStyles.SemiThin15}>심화트랙 (전공심화)</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: deviceWidth * 0.23,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={AllTextStyles.SemiThin15}>기타전공학과</Text>
            <Text style={AllTextStyles.SemiThin15}>-</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                width: deviceWidth * 0.35,
                height: deviceWidth * 0.092,
                backgroundColor: '#009B64',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handlebut}>
              <Text style={[AllTextStyles.medium16, {color: '#FFFFFF'}]}>
                졸업자가진단 시작
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: deviceWidth * 0.9,
                height: deviceHeight * 0.0015,
                backgroundColor: '#979797',
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 6, alignItems: 'center'}}>
        {state === true ? (
          <View style={{marginTop: deviceHeight * 0.015}}>
            <ScrollView>
              <SelfGraduateDetailBar
                text="경건실천"
                detailtext1="(4)"
                detailtext2="(4)"
                detailtext3="통과"
                detailtext4="(0)"
              />
              <SelfGraduateDetailBar
                text="전공계"
                detailtext1="78"
                detailtext2="66"
                detailtext3="불가"
                detailtext4="12"
              />
              <SelfGraduateDetailBar
                text="dfdf"
                detailtext1="78"
                detailtext2="66"
                detailtext3="불가"
                detailtext4="12"
              />
              <SelfGraduateDetailBar
                text="gssgsg"
                detailtext1="78"
                detailtext2="66"
                detailtext3="불가"
                detailtext4="12"
              />
              <SelfGraduateDetailBar
                text="전공ererer계"
                detailtext1="78"
                detailtext2="66"
                detailtext3="불가"
                detailtext4="12"
              />
              <SelfGraduateDetailBar
                text="전공ww계"
                detailtext1="78"
                detailtext2="66"
                detailtext3="불가"
                detailtext4="12"
              />
              <View style={{marginTop: deviceWidth * 0.01}}></View>
            </ScrollView>
          </View>
        ) : (
          <View />
        )}
      </View>
    </AllBackground>
  );
};

export default SelfGraduate;
