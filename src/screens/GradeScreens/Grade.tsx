import React from 'react';
import {Text, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {GradeButton} from '../../components/GradeComponet/GradeCompo';
import {ScrollView} from 'react-native-gesture-handler';
import Svg, {Circle, Text as SvgText} from 'react-native-svg';
import GradeHakgiDropdown from '../../components/DropDownComponets/GradeDropDownComponet/GradeHakgiDropDownCompo';
import GradeYearDropdown from '../../components/DropDownComponets/GradeDropDownComponet/GradeYearDropDownCompo';

const Grade: React.FC<ScreenProps> = ({navigation}) => {
  const percentage = 100; // 그래프에서 보여줄 비율 (예: 92%)
  const radius = 50; // 원 반지름
  const strokeWidth = 5; // 원의 두께
  const circumference = 2 * Math.PI * radius;
  // 92%의 길이만큼 진행 원을 표시
  const progress = 0.92 * circumference; // 92% 만큼만 진행
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="성 적 조 회"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <Text
          style={[AllTextStyles.SemiBold16, {marginRight: deviceWidth * 0.65}]}>
          전체 성적목록
        </Text>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.26,
            borderColor: '#CFCFCF',
            borderWidth: 1,
            borderRadius: 15,
            marginTop: deviceHeight * 0.01,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: deviceWidth * 0.35,
                height: deviceHeight * 0.16,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: deviceHeight * 0.03,
              }}>
              <Svg
                width={deviceWidth * 0.8}
                height={deviceHeight * 0.2}
                viewBox="0 0 120 120">
                {/* 배경 원 */}
                <Circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#D9D9D9"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${circumference} ${circumference}`} // 전체 원의 둘레
                  strokeDashoffset={(-circumference * 4) / 12} // 시작 위치를 7시로 조정
                  fill="none"
                  rotation="30" // 시작 각도를 7시로 조정
                  origin="60, 60"
                />
                {/* 진행 원 */}
                <Circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#009B64"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${progress} ${circumference}`}
                  strokeDashoffset={(-circumference * 4) / 12} // 시작 위치를 7시로 조정
                  fill="none"
                  rotation="30" // 시작 각도를 7시로 조정
                  origin="60, 60"
                />
                {/* 중앙 텍스트 */}
                <SvgText
                  x="60"
                  y="55" // 숫자 위치를 조금 위로 이동
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="25"
                  fontWeight="bold"
                  fill="#000000">
                  {percentage} {/* % 제거 */}
                </SvgText>
                {/* '백분율' 텍스트 */}
                <SvgText
                  x="60"
                  y="75" // '백분율' 위치
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="12"
                  fill="#7c7c7c">
                  백분율
                </SvgText>
              </Svg>
            </View>
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: deviceWidth * 0.03,
                    height: deviceWidth * 0.03,
                    borderRadius: 10,
                    backgroundColor: '#4B568D',
                    marginTop: deviceWidth * 0.0035,
                    marginLeft: deviceWidth * 0.05,
                    marginRight: deviceWidth * 0.03,
                  }}
                />
                <Text style={AllTextStyles.SemiBold12}>
                  취득학점 / 신청학점
                </Text>
              </View>
              <View
                style={{
                  width: deviceWidth * 0.42,
                  height: deviceHeight * 0.012,
                  backgroundColor: '#D9D9D9',
                  marginLeft: deviceWidth * 0.05,
                  borderRadius: 5,
                  marginTop: deviceHeight * 0.013,
                }}>
                <View
                  style={{
                    width: deviceWidth * 0.4,
                    height: deviceHeight * 0.012,
                    backgroundColor: '#4B568D',
                    borderRadius: 5,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: deviceWidth * 0.12,
                  marginTop: deviceWidth * 0.01,
                  marginLeft: deviceWidth * 0.35,
                  alignItems: 'flex-end',
                }}>
                <Text style={[AllTextStyles.SemiBold10, {color: '#999999'}]}>
                  111 / 113
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: deviceHeight * 0.03}}>
                <View
                  style={{
                    width: deviceWidth * 0.03,
                    height: deviceWidth * 0.03,
                    borderRadius: 10,
                    backgroundColor: '#009B64',
                    marginTop: deviceWidth * 0.001,
                    marginLeft: deviceWidth * 0.05,
                    marginRight: deviceWidth * 0.03,
                  }}
                />
                <Text style={[AllTextStyles.SemiBold12]}>평점</Text>
              </View>
              <View
                style={{
                  width: deviceWidth * 0.42,
                  height: deviceHeight * 0.012,
                  backgroundColor: '#D9D9D9',
                  marginLeft: deviceWidth * 0.05,
                  borderRadius: 5,
                  marginTop: deviceHeight * 0.013,
                }}>
                <View
                  style={{
                    width: deviceWidth * 0.42,
                    height: deviceHeight * 0.012,
                    backgroundColor: '#009B64',
                    borderRadius: 5,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: deviceWidth * 0.14,
                  marginTop: deviceWidth * 0.01,
                  marginLeft: deviceWidth * 0.33,
                  alignItems: 'flex-end',
                }}>
                <Text style={[AllTextStyles.SemiBold10, {color: '#999999'}]}>
                  4.5 / 4.5
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 6,
          alignItems: 'center',
          marginTop: deviceHeight * -0.02,
        }}>
        <Text
          style={[AllTextStyles.SemiBold16, {marginRight: deviceWidth * 0.73}]}>
          성적조회
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginRight: deviceWidth * 0.46,
            marginTop: deviceHeight * 0.01,
            marginBottom: deviceHeight * -0.018,
            zIndex: 2,
          }}>
          <GradeYearDropdown />
          <GradeHakgiDropdown />
        </View>
        <ScrollView style={{zIndex: 1}}>
          <View>
            <GradeButton
              titleText="데이터 베이스"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="89.9"
              detailText6="2/42"
              detailText7="-"
            />
            <View style={{height: deviceHeight * 0.02}} />
            <GradeButton
              titleText="자바 프로그래밍"
              detailText1="-"
              detailText2="10"
              detailText3="92.7"
              detailText4="-"
              detailText5="94.9"
              detailText6="1/42"
              detailText7="-"
            />
            <View style={{height: deviceHeight * 0.02}} />
            <GradeButton
              titleText="윈도우프로그래밍"
              detailText1="-"
              detailText2="5"
              detailText3="79.2"
              detailText4="-"
              detailText5="82.9"
              detailText6="4/42"
              detailText7="-"
            />
            <View style={{height: deviceHeight * 0.02}} />
            <GradeButton
              titleText="사랑과삶"
              detailText1="-"
              detailText2="8"
              detailText3="97.2"
              detailText4="-"
              detailText5="99"
              detailText6="1/42"
              detailText7="-"
            />
            <View style={{height: deviceHeight * 0.02}} />
            <GradeButton
              titleText="인터넷보안"
              detailText1="-"
              detailText2="15"
              detailText3="87.2"
              detailText4="-"
              detailText5="91.9"
              detailText6="2/42"
              detailText7="-"
            />
          </View>
        </ScrollView>
      </View>
    </AllBackground>
  );
};
export default Grade;
