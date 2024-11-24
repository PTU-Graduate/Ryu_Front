import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/Feather';
import {GradeButton} from '../../components/GradeComponet/GradeCompo';
import {ScrollView} from 'react-native-gesture-handler';

const Grade: React.FC<ScreenProps> = ({navigation}) => {
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
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: deviceWidth * 0.35,
                height: deviceHeight * 0.16,
                backgroundColor: '#987',
              }}
            />
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
                    width: deviceWidth * 0.37,
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
                  3.95 / 4.5
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
            marginTop: deviceHeight * 0.015,
            marginBottom: deviceWidth * 0.02,
          }}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: deviceHeight * 0.002,
                marginRight: deviceWidth * 0.025,
              }}>
              2024년
            </Text>
            <Icon name="chevron-down" size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: deviceHeight * 0.002,
                marginRight: deviceWidth * 0.025,
                marginLeft: deviceHeight * 0.025,
              }}>
              1학기
            </Text>
            <Icon name="chevron-down" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <GradeButton
              titleText="데이터 베이스"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="87.9"
              detailText6="8/42"
              detailText7="-"
            />
            <GradeButton
              titleText="자바 프로그래밍"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="87.9"
              detailText6="8/42"
              detailText7="-"
            />
            <GradeButton
              titleText="윈도우프로그래밍"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="87.9"
              detailText6="8/42"
              detailText7="-"
            />
            <GradeButton
              titleText="경건실천"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="87.9"
              detailText6="8/42"
              detailText7="-"
            />
            <GradeButton
              titleText="어쩌구저쩌구긴이름의 과목명 이름입니당"
              detailText1="-"
              detailText2="5"
              detailText3="87.2"
              detailText4="-"
              detailText5="87.9"
              detailText6="8/42"
              detailText7="-"
            />
          </View>
        </ScrollView>
      </View>
    </AllBackground>
  );
};
export default Grade;
