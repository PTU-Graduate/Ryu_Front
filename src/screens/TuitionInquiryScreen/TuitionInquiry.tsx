import {View, Text} from 'react-native';
import React from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {GreenViewBar} from '../../components/AllSrcComponets/AllViewBar';
import {TIDetailBar} from '../../components/TuitionInquiryComponet/TuitionInquiryCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

const TuitionInquiry = () => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo text="등 록 금 납 부 현 황" />
      </View>
      <View style={{flex: 1}}>
        <GreenViewBar text="2024년 1학기" />
      </View>
      <View style={{flex: 9}}>
        <TIDetailBar titleText="분납여부" detailText="N" />
        <TIDetailBar titleText="수업료" detailText="3,920,000" />
        <TIDetailBar titleText="기타경비" detailText="20,000" />
        <TIDetailBar titleText="계" detailText="3,940,000" />
        <TIDetailBar titleText="학비감면" detailText="0" />
        <TIDetailBar titleText="납부금액" detailText="3,920,000" />
        <TIDetailBar titleText="납부일자" detailText="2024-02-28" />
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={[
              AllTextStyles.medium10,
              {color: '#FF0000', marginRight: deviceWidth * 0.05},
            ]}>
            기타 경비는 총학생회비를 의미합니다.
          </Text>
        </View>
      </View>
    </AllBackground>
  );
};

export default TuitionInquiry;
