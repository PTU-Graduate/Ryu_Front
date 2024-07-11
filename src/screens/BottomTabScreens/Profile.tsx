import {View, Text, Image} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {
  StudentInfoFDTextbar,
  StudentInfoTextbar,
} from '../../components/StudentInfoComponents/StudentInfoComponents';

const Profile = () => {
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
          <View style={{marginLeft: deviceWidth * 0.51}}>
            <Text
              style={[
                AllTextStyles.SemiBold16,
                {
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
                  marginBottom: deviceHeight * 0.03,
                },
              ]}>
              커뮤니케이션디자인학과
            </Text>
            <Text
              style={[
                AllTextStyles.SemiBold17,
                {
                  marginBottom: deviceHeight * 0.05,
                },
              ]}>
              류채현
            </Text>
            <Text
              style={[
                AllTextStyles.SemiThin12,
                {
                  marginBottom: deviceHeight * 0.008,
                },
              ]}>
              연락쳐: 010-3934-2106
            </Text>
            <Text style={[AllTextStyles.SemiThin12]}>
              주민번호: 020816 - 4******
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 4}}>
        <StudentInfoFDTextbar
          titletext1="학적구분"
          detailtext1="휴학"
          titletext2="지도교수"
          detailtext2="이경희"
        />
        <StudentInfoFDTextbar
          titletext1="학년"
          detailtext1="3학년"
          titletext2="전공유형"
          detailtext2="전공심화"
        />
        <StudentInfoTextbar titletext1="졸업일자" detailtext1="-" />
        <StudentInfoTextbar
          titletext1="은행명"
          detailtext1="352-1095-5772-23 농협은행"
        />
      </View>
    </AllBackground>
  );
};
export default Profile;
