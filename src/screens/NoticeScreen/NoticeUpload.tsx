import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {ScreenProps} from '../../navigations/StackNavigator';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

const NoticeUpload: React.FC<ScreenProps> = ({navigation}) => {
  const [tit, setTit] = useState<string>('');
  const [cont, setCont] = useState<string>('');
  return (
    <AllBackground>
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <AllTitleTopBarCompo
          text="공지사항 등록"
          onPress={() => navigation.goBack()}></AllTitleTopBarCompo>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <TextInput
          style={{
            marginTop: deviceHeight * 0.07,
            alignItems: 'center',
            justifyContent: 'center',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.05,
            borderBottomWidth: 1,
          }}
          placeholder="제목"></TextInput>
      </View>
      <View style={{flex: 6, alignItems: 'center'}}>
        <TextInput
          style={{
            marginTop: deviceHeight * 0.07,
            alignItems: 'center',
            justifyContent: 'center',
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.1,
            borderBottomWidth: 1,
          }}
          placeholder="본문"></TextInput>
      </View>
    </AllBackground>
  );
};

export default NoticeUpload;
