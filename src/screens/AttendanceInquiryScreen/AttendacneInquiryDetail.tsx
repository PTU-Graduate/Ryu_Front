import {Text, View} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AndroidTextStyle from '../../styles/AllSrcStyles/AndroidTextStyle';

const AttendanceInquiryDetail: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="출 석 조 회"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 10}}>
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
            {marginLeft: deviceWidth * 0.055, marginTop: deviceHeight * 0.012},
          ]}>
          01745-01
        </Text>
        <Text
          style={[
            AllTextStyles.SemiBold14,
            {marginLeft: deviceWidth * 0.055, marginTop: deviceHeight * 0.005},
          ]}>
          통신망보안
        </Text>
        <View style={{alignItems: 'center', marginTop: deviceHeight * 0.013}}>
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
            <Text style={AndroidTextStyle.AISemiBold13}>1주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>2주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>3주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>4주차</Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.9,
              height: deviceWidth * 0.085,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={[AndroidTextStyle.AIDSemiBold13, {color: '#FF0000'}]}>
              결석
            </Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
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
            <Text style={AndroidTextStyle.AISemiBold13}>5주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>6주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>7주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>8주차</Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.9,
              height: deviceWidth * 0.085,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={[AndroidTextStyle.AIDSemiBold13, {color: '#FF7A00'}]}>
              지각
            </Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
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
            <Text style={AndroidTextStyle.AISemiBold13}>9주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>10주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>11주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>12주차</Text>
          </View>
          <View
            style={{
              width: deviceWidth * 0.9,
              height: deviceWidth * 0.085,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={[AndroidTextStyle.AIDSemiBold13, {color: '#FF7A00'}]}>
              지각
            </Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
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
            <Text style={AndroidTextStyle.AISemiBold13}>13주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>14주차</Text>
            <Text style={AndroidTextStyle.AISemiBold13}>15주차</Text>
            <Text style={[AndroidTextStyle.AISemiBold13, {color: '#009B64'}]}>
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
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={AndroidTextStyle.AIDSemiBold13}>출석</Text>
            <Text style={[AllTextStyles.SemiBold13, {color: '#ffffff'}]}>
              출석
            </Text>
          </View>
        </View>
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiryDetail;
