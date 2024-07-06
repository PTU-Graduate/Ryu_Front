import {View, Text, Image} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {StudentInfoTextbar} from '../../components/StudentInfoComponents/StudentInfoComponents';

const StudentInfo = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="학 생 정 보" />
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceHeight * 0.3,
            marginTop: deviceHeight * 0.01,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <View
            style={{
              width: deviceWidth * 0.38,
              height: deviceHeight * 0.24,
              marginLeft: deviceWidth * 0.07,
              backgroundColor: '#D9D9D9',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <Image
              style={{
                width: deviceWidth * 0.38,
                height: deviceHeight * 0.24,
                borderRadius: 12,
                position: 'absolute',
              }}
              source={require('../../assets/images/Person.jpeg')}
            />
          </View>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                marginLeft: deviceWidth * 0.51,
                marginBottom: deviceHeight * 0.01,
                marginTop: deviceHeight * 0.008,
              },
            ]}>
            문화예술대학
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                marginLeft: deviceWidth * 0.51,
                marginBottom: deviceHeight * 0.03,
              },
            ]}>
            커뮤니케이션디자인학과
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold17,
              {
                marginLeft: deviceWidth * 0.51,
                marginBottom: deviceHeight * 0.05,
              },
            ]}>
            류채현
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin12,
              {
                marginLeft: deviceWidth * 0.51,
                marginBottom: deviceHeight * 0.008,
              },
            ]}>
            연락쳐: 010-3934-2106
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin12,
              {
                marginLeft: deviceWidth * 0.51,
              },
            ]}>
            주민번호: 020816 - 4******
          </Text>
        </View>
      </View>

      <View style={{flex: 4}}>
        <StudentInfoTextbar></StudentInfoTextbar>
      </View>
    </AllBackground>
  );
};
export default StudentInfo;
