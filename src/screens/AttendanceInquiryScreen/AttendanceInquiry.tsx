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
            SBNtext="01745-08"
            SBTtext="통신망보안"
            ATnumber="13"
            LAnumber="2"
            ABnumber="1"
            onPress={() => navigation.navigate('AttendanceInquiryDetail')}
          />
          <RDDetailBar
            Titletext="교선"
            SBNtext="05617-01"
            SBTtext="사건으로보는한국근현대사의이해"
            ATnumber="11"
            LAnumber="2"
            ABnumber="3"
          />
          <RDDetailBar
            Titletext="P교"
            SBNtext="04179-34"
            SBTtext="PTU취창업역량개발"
            ATnumber="16"
            LAnumber="0"
            ABnumber="0"
          />
          <MJDetailBar
            Titletext="전선"
            SBNtext="01874-01"
            SBTtext="네트워크프로토콜"
            ATnumber="16"
            LAnumber="0"
            ABnumber="0"
          />
          <MJDetailBar
            Titletext="전선"
            SBNtext="04818-01"
            SBTtext="웹프로그래밍응용"
            ATnumber="13"
            LAnumber="2"
            ABnumber="1"
          />
          <MJDetailBar
            Titletext="전선"
            SBNtext="05343-01"
            SBTtext="객체지향소프트웨어공학"
            ATnumber="10"
            LAnumber="2"
            ABnumber="3"
          />
          <RDDetailBar
            Titletext="교선"
            SBNtext="02709-01"
            SBTtext="사이버토익"
            ATnumber="16"
            LAnumber="0"
            ABnumber="0"
          />
        </ScrollView>
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiry;
