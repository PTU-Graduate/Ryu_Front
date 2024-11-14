import {View} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {DetailBar} from '../../components/AttendanceInquiryComponet/AttendanceInquiryCompo';
import {IconGreenViewBar} from '../../components/AllSrcComponets/AllViewBar';
import {ScreenProps} from '../../navigations/StackNavigator';

const AttendanceInquiry: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text="출 석 조 회"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          flex: 10,
        }}>
        <IconGreenViewBar text="2024년 1학기"></IconGreenViewBar>
        <DetailBar />
      </View>
    </AllBackground>
  );
};

export default AttendanceInquiry;
