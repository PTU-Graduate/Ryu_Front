import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/Entypo';
import {DetailBar} from '../../components/AttendanceInquiryComponet/AttendanceInquiryCompo';

const AttendanceInquiry = () => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo text="출 석 조 회" />
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#49b08c',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.05,
            position: 'absolute',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold18,
              {
                color: '#ffffff',
                marginLeft: deviceWidth * 0.065,
              },
            ]}>
            2024년 1학기
          </Text>
          <TouchableOpacity>
            <Icon
              style={{marginRight: deviceWidth * 0.02}}
              name="chevron-down"
              size={27}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#009b64',
            width: deviceWidth * 0.03,
            height: deviceHeight * 0.05,
            marginRight: deviceWidth * 0.87,
          }}></View>
      </View>
      <View>
        <DetailBar />
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiry;
