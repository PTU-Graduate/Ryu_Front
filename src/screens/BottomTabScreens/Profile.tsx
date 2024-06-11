import {View, Text, Image} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {StudentInfoTextbar} from '../../components/StudentInfoComponents/StudentInfoComponents';

const Profile = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="학생정보" />
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceHeight * 0.25,
            backgroundColor: '#F0F0F0',
            position: 'absolute',
          }}>
          <View
            style={{
              width: deviceWidth * 0.5,
              height: deviceHeight * 0.2,
              backgroundColor: '#D9D9D9',
              borderRadius: 10,
              top: deviceHeight * 0.025,
              marginLeft: deviceWidth * 0.04,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: deviceWidth * 0.4,
                height: deviceHeight * 0.2,
                resizeMode: 'contain',
              }}
              source={require('../../assets/images/PtuLogo.png')}
            />
          </View>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {
                marginLeft: deviceWidth * 0.6,
                marginTop: deviceHeight * 0.05,
                position: 'absolute',
              },
            ]}>
            문화예술대학
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold14,
              {
                marginLeft: deviceWidth * 0.6,
                position: 'absolute',
                marginTop: deviceHeight * 0.08,
              },
            ]}>
            커뮤니케이션디자인학과
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold15,
              {
                marginLeft: deviceWidth * 0.6,
                position: 'absolute',
                marginTop: deviceHeight * 0.11,
              },
            ]}>
            류채현
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin12,
              {
                marginLeft: deviceWidth * 0.6,
                position: 'absolute',
                marginTop: deviceHeight * 0.15,
              },
            ]}>
            연락쳐: 010-3934-2106
          </Text>
          <Text
            style={[
              AllTextStyles.SemiThin12,
              {
                marginLeft: deviceWidth * 0.6,
                position: 'absolute',
                marginTop: deviceHeight * 0.17,
              },
            ]}>
            주민번호:020816 - 4******
          </Text>
        </View>
      </View>

      <View style={{flex: 4}}>
        <StudentInfoTextbar></StudentInfoTextbar>
      </View>
    </AllBackground>
  );
};

export default Profile;
