import {Text, View} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

const AttendanceInquiryDetail: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="출 석 조 회" />
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AllTextStyles.SemiBold17,
              {marginLeft: deviceWidth * 0.055},
            ]}>
            2024년
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold17,
              {color: '#009B64', marginLeft: deviceWidth * 0.02},
            ]}>
            1학기
          </Text>
        </View>
        <Text
          style={[
            AllTextStyles.SemiThin12,
            {marginLeft: deviceWidth * 0.055, marginTop: deviceHeight * 0.013},
          ]}>
          00020-08
        </Text>
        <Text
          style={[
            AllTextStyles.medium14,
            {marginLeft: deviceWidth * 0.055, marginTop: deviceHeight * 0.006},
          ]}>
          수퍼히어로영화와드라마를통한서양역사이해하기
        </Text>
      </View>
      <View
        style={{
          flex: 9,
          alignItems: 'center',
          marginTop: deviceHeight * 0.02,
        }}>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            backgroundColor: '#009B64',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            1주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            2주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            3주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            4주차
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#FF0000'}]}>
            결석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            backgroundColor: '#009B64',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            5주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            6주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            7주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            8주차
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#FF7A00'}]}>
            지각
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            backgroundColor: '#009B64',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            9주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            10주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            11주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            12주차
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#FF7A00'}]}>
            지각
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            backgroundColor: '#009B64',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            13주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            14주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            15주차
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#009B64'}]}>
            16주차
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.085,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#000000'}]}>
            출석
          </Text>
          <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
            출석
          </Text>
        </View>
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiryDetail;
