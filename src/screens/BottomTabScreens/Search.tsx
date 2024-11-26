import React from 'react';
import {Text, View} from 'react-native';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {DrawerTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {TextInput} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/Fontisto';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {TouchableOpacity} from 'react-native';
import {SearchGraybar} from '../../components/MainSrcCompo/SerachCompo.tsx/SearchCompo';
import {ScreenProps} from '../../navigations/StackNavigator';

const Search: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <DrawerTitleTopBarCompo text="검 색" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={{
            width: deviceWidth * 0.86,
            height: deviceHeight * 0.05,
            borderBottomWidth: 2,
            borderBottomColor: '#000000',
            paddingLeft: deviceWidth * 0.01,
          }}
          placeholder="Search"></TextInput>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 1,
            left: deviceWidth * 0.85,
            bottom: deviceHeight * 0.04,
          }}>
          <Icon size={21} name="search" />
        </TouchableOpacity>
        <Text
          style={[
            AllTextStyles.SemiThin11,
            {color: '#C9C6C6', marginTop: deviceHeight * 0.01},
          ]}>
          최근에 찾아본 검색어 입니다.
        </Text>
      </View>
      <View style={{flex: 9}}>
        <View style={{marginTop: deviceWidth * 0.1, alignItems: 'center'}}>
          <SearchGraybar text="수강조회"></SearchGraybar>
          <SearchGraybar text="졸업자가진단"></SearchGraybar>
          <SearchGraybar text="출석조회"></SearchGraybar>
          <SearchGraybar text="성적조회"></SearchGraybar>
          <TouchableOpacity
            style={{top: deviceHeight * 0.01, left: deviceWidth * 0.344}}>
            <Text style={[AllTextStyles.SemiBold10, {color: '#FF5555'}]}>
              전체 삭제
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AllBackground>
  );
};

export default Search;
