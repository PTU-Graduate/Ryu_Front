/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface CategoryProps {
  selectedCategory: string; // 상태 공유
  setSelectedCategory: (category: string) => void; // 상태 공유 를 위한 props 설정
}

export const NoticeCategoryCompo: React.FC<CategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  // useState는 상태관리 Hook 즉, setSelectedCategory를 이용하여 어떤 값을 가지고 오는 지 selectedCategory에 저장한다.
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]); // [selectedCategory]의 기능은 해당 값 즉, selectedCategory에 넘어오는 값이 바뀔 때마다 useEffect값이 마운트 된다.
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth * 0.9,
        marginLeft: deviceWidth * 0.05,
      }}>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceHeight * 0.036,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '공지' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('공지')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '공지' ? '#000000' : '#909090'}, // 삼항연산자를 이용하여 눌렀을 때와 안눌렀을 때의 색깔 차이를 준다.
          ]}>
          공지사항
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceHeight * 0.036,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '학사' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('학사')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '학사' ? '#000000' : '#909090'},
          ]}>
          학사안내
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceHeight * 0.036,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '장학' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('장학')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '장학' ? '#000000' : '#909090'},
          ]}>
          장학안내
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceHeight * 0.036,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '입학' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('입학')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '입학' ? '#000000' : '#909090'},
          ]}>
          입학안내
        </Text>
      </TouchableOpacity>
    </View>
  );
};
