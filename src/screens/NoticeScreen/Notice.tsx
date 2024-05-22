/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {Image, Text, View} from 'react-native';
import {ScreenProps} from '../../navigations/StackNavigator';
import {NoticeCategoryCompo} from '../../components/NoticeSrcComponets/NoticeCategoryCompo';
import {NoticeListButton} from '../../components/NoticeSrcComponets/NoticePostCompo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

const Notice: React.FC<ScreenProps> = ({}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('공지');
  return (
    <AllBackground>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>공지사항</Text>
      </View>
      <View style={{flex: 1}}>
        <NoticeCategoryCompo
          selectedCategory={selectedCategory} // 상태 공유
          setSelectedCategory={setSelectedCategory} // 상태 공유
        />
      </View>
      {selectedCategory === '공지' && (
        <View style={{flex: 7, alignItems: 'center'}}>
          <NoticeListButton
            title="2024학년도 어쩌구 저쩌구 쏼라쏼ㄹ 나는 멍청이 궁시렁"
            date="2024.04.07"
          />
        </View>
      )}
      {selectedCategory === '학사' && (
        <View style={{flex: 7, alignItems: 'center'}}>
          <NoticeListButton
            title="2024학년도 어쩌구 저쩌구 쏼라쏼ㄹ 나는 바보 궁시렁"
            date="2024.04.07"
          />
        </View>
      )}
      {selectedCategory === '장학' && (
        <View style={{flex: 7, alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/money.png')}
              // resizeMode="contain"
              style={{
                width: deviceWidth * 1,
                height: deviceHeight * 0.18,
                opacity: 0.3,
              }}
            />
          </TouchableOpacity>
          <View style={{marginTop: deviceHeight * 0.025}}>
            <NoticeListButton
              title="2024학년도 어쩌구 저쩌구 이제 조금 알 것 같아요"
              date="2024.04.07"
            />
          </View>
        </View>
      )}
      {selectedCategory === '입학' && (
        <View style={{flex: 7, alignItems: 'center'}}>
          <NoticeListButton
            title="내가 멍청이었구나 랄라 트랄라 노래를 부르자"
            date="2024.04.07"
          />
        </View>
      )}
    </AllBackground>
  );
};

export default Notice;
