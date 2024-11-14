import {View, Text} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {TIDetailBar} from '../../components/TuitionInquiryComponet/TuitionInquiryCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {ScreenProps} from '../../navigations/StackNavigator';

const TuitionInquiry: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="등 록 금 납 부 현 황"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 10}}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                AllTextStyles.medium15,
                {
                  marginRight: deviceWidth * 0.6,
                  lineHeight: deviceHeight * 0.05,
                },
              ]}>
              2024년 1학기
            </Text>
            <View
              style={{
                width: deviceWidth * 0.85,
                height: deviceWidth * 0.3,
                backgroundColor: '#009B64',
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  AllTextStyles.SemiBold16,
                  {
                    color: '#ffffff',
                    marginLeft: deviceWidth * 0.05,
                    marginBottom: deviceWidth * 0.025,
                  },
                ]}>
                수업료
              </Text>
              <Text
                style={[
                  AllTextStyles.SemiBold26,
                  {
                    color: '#ffffff',
                    marginLeft: deviceWidth * 0.05,
                  },
                ]}>
                3,920,000
              </Text>
            </View>
          </View>
          <View
            style={{
              width: deviceWidth * 1,
              height: deviceHeight * 0.004,
              backgroundColor: '#EDEDED',
              marginTop: deviceWidth * 0.06,
            }}
          />
          <View
            style={{
              width: deviceWidth * 1,
              height: deviceHeight * 0.66,
              backgroundColor: '#F5F5F5',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  AllTextStyles.SemiBold17,
                  {
                    marginLeft: deviceWidth * 0.09,
                    marginTop: deviceWidth * 0.04,
                  },
                ]}>
                2024년
              </Text>
              <Text
                style={[
                  AllTextStyles.SemiBold17,
                  {
                    color: '#009B64',
                    marginLeft: deviceWidth * 0.02,
                    marginTop: deviceWidth * 0.04,
                  },
                ]}>
                1학기
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View
                style={{
                  width: deviceWidth * 0.22,
                  height: deviceWidth * 0.04,
                  backgroundColor: '#009B64',
                  marginTop: deviceWidth * 0.03,
                  borderRadius: 3,
                }}
              />
              <View
                style={{
                  width: deviceWidth * 0.22,
                  height: deviceWidth * 0.04,
                  backgroundColor: '#D5D5D5',
                  marginTop: deviceWidth * 0.03,
                  borderRadius: 3,
                }}
              />
              <View
                style={{
                  width: deviceWidth * 0.22,
                  height: deviceWidth * 0.04,
                  backgroundColor: '#D5D5D5',
                  marginTop: deviceWidth * 0.03,
                  borderRadius: 3,
                }}
              />
            </View>
            <Text
              style={[
                AllTextStyles.medium10,
                {
                  color: '#6E6E6E',
                  marginLeft: deviceWidth * 0.09,
                  marginTop: deviceWidth * 0.05,
                },
              ]}>
              기타경비는 총학생회비를 의미합니다.
            </Text>
            <View style={{marginTop: deviceHeight * 0.01}} />
            <TIDetailBar titleText="분납여부" detailText="N" />
            <TIDetailBar titleText="수업료" detailText="3,920,000" />
            <TIDetailBar titleText="기타경비" detailText="20,000" />
            <TIDetailBar titleText="계" detailText="3,940,000" />
            <TIDetailBar titleText="학비감면" detailText="0" />
            <TIDetailBar titleText="납부금액" detailText="3,920,000" />
            <TIDetailBar titleText="납부일자" detailText="2024-02-28" />
          </View>
        </ScrollView>
      </View>
    </AllBackground>
  );
};

export default TuitionInquiry;
