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
import {ScreenProps} from '../../navigations/StackNavigator';

const Profile: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="학 생 정 보"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceHeight * 0.3,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <View
            style={{
              width: deviceWidth * 0.39,
              height: deviceHeight * 0.24,
              marginLeft: deviceWidth * 0.07,
              backgroundColor: '#D9D9D9',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <Image
              style={{
                width: deviceWidth * 0.39,
                height: deviceHeight * 0.24,
                borderRadius: 15,
                position: 'absolute',
              }}
              source={require('../../assets/images/profile.jpeg')}
            />
          </View>
          <View style={{marginLeft: deviceWidth * 0.51}}>
            <Text
              style={[
                AllTextStyles.SemiBold16,
                {
                  marginTop: deviceHeight * 0.01,
                  marginBottom: deviceHeight * 0.01,
                },
              ]}>
              IT공과대학
            </Text>
            <Text
              style={[
                AllTextStyles.SemiBold16,
                {
                  marginBottom: deviceHeight * 0.03,
                },
              ]}>
              정보통신학과
            </Text>
            <Text
              style={[
                AllTextStyles.medium16,
                {
                  marginBottom: deviceHeight * 0.05,
                },
              ]}>
              안재경
            </Text>
            <Text
              style={[
                AllTextStyles.SemiThin12,
                {
                  marginBottom: deviceHeight * 0.008,
                },
              ]}>
              연락쳐:
            </Text>
            <Text style={[AllTextStyles.SemiThin12]}>주민번호:</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 7}}>
        <View style={{marginTop: deviceHeight * 0.09}}>
          <StudentInfoFDTextbar
            titletext1="학적구분"
            detailtext1="재학"
            titletext2="지도교수"
            detailtext2="이경희"
          />
          <StudentInfoFDTextbar
            titletext1="학년"
            detailtext1="4학년"
            titletext2="전공유형"
            detailtext2="전공심화"
          />
          <StudentInfoTextbar titletext1="졸업일자" detailtext1="-" />
          <StudentInfoTextbar
            titletext1="은행명"
            detailtext1="352-1095-5772-23 농협은행"
          />
        </View>
      </View>
    </AllBackground>
  );
};
export default Profile;
