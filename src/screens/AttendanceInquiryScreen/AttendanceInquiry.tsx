import {Text, View} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {
  MJDetailBar,
  RDDetailBar,
} from '../../components/AttendanceInquiryComponet/AttendanceInquiryCompo';
import {ScreenProps} from '../../navigations/StackNavigator';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {ScrollView} from 'react-native-gesture-handler';

const AttendanceInquiry: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="출 석 조 회"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text
          style={[AllTextStyles.SemiBold17, {marginLeft: deviceWidth * 0.055}]}>
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
      <View
        style={{
          flex: 9,
          marginTop: deviceHeight * -0.045,
        }}>
        <ScrollView>
          <MJDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="수퍼히어로영화와드라마를통한서양역사이해하기"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
            onPress={() => navigation.navigate('AttendanceInquiryDetail')}
          />
          <MJDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="수퍼히어로영화와드라마를통한서양역사이해하기"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <MJDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="수퍼히어로영화와드라마를통한서양역사이해하기"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <MJDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="수퍼히어로영화와드라마를통한서양역사이해하기"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <RDDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="P-MOOC(고대그리스신화와문학세계)"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <RDDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="P-MOOC(고대그리스신화와문학세계)"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <RDDetailBar
            Titletext="전필"
            SBNtext="00020-08"
            SBTtext="P-MOOC(고대그리스신화와문학세계)"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
        </ScrollView>
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiry;
