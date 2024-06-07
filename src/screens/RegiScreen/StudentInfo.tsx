import {View, Text, Image} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

const StudentInfo = () => {
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
              AllTextStyles.SemiBold14,
              {
                marginLeft: deviceWidth * 0.7,
                position: 'absolute',
              },
            ]}>
            문화예술대학
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold14,
              {
                marginLeft: deviceWidth * 0.7,
                position: 'absolute',
                marginTop: deviceHeight * 0.02,
              },
            ]}>
            커뮤니케이션디자인학과
          </Text>
          <Text
            style={[
              AllTextStyles.SemiBold14,
              {
                marginLeft: deviceWidth * 0.7,
                position: 'absolute',
                marginTop: deviceHeight * 0.06,
              },
            ]}>
            류채현
          </Text>
        </View>
      </View>

      <View style={{flex: 4}}></View>
    </AllBackground>
  );
};
export default StudentInfo;
