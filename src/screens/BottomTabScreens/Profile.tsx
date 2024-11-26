import {View, Text, Image} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {DrawerTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
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
        <DrawerTitleTopBarCompo text="학 생 정 보" />
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            width: deviceWidth * 1,
            height: deviceHeight * 0.29,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <View
            style={{
              marginLeft: deviceWidth * 0.065,
              position: 'absolute',
            }}>
            <Image
              style={{
                width: deviceWidth * 0.4,
                height: deviceHeight * 0.24,
                borderRadius: 15,
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/JK.jpg')}
            />
          </View>
          <View style={{marginLeft: deviceWidth * 0.51}}>
            <Text
              style={[
                AllTextStyles.SemiBold15,
                {
                  marginBottom: deviceHeight * 0.01,
                },
              ]}>
              IT공과대학
            </Text>
            <Text
              style={[
                AllTextStyles.SemiBold17,
                {
                  marginBottom: deviceHeight * 0.04,
                },
              ]}>
              정보통신학과
            </Text>
            <Text
              style={[
                AllTextStyles.medium16,
                {
                  marginBottom: deviceHeight * 0.06,
                },
              ]}>
              안재경
            </Text>
            <Text
              style={[
                AllTextStyles.SemiThin12,
                {
                  marginBottom: deviceHeight * 0.005,
                },
              ]}>
              연락쳐: 010-4486-2232
            </Text>
            <Text style={[AllTextStyles.SemiThin12]}>
              주민번호: 001213-3******
            </Text>
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
