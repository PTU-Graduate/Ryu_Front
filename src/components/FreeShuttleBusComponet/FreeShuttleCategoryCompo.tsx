/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

interface CategoryProps {
  selectedCategory: string; // 상태 공유
  setSelectedCategory: (category: string) => void; // 상태 공유 를 위한 props 설정
}

export const FreeShuttleCategoryCompo: React.FC<CategoryProps> = ({
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: deviceWidth * 0.015,
      }}>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceWidth * 0.065,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '무료' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('무료')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '무료' ? '#000000' : '#909090'},
          ]}>
          무료노선
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: deviceWidth * 0.19,
          height: deviceWidth * 0.065,
          alignItems: 'center',
          borderBottomWidth: selectedCategory === '유료' ? 1.2 : undefined,
          borderBottomColor: '#000000',
        }}
        onPress={() => setSelectedCategory('유료')}>
        <Text
          style={[
            AllTextStyles.SemiBold16,
            {color: selectedCategory === '유료' ? '#000000' : '#909090'},
          ]}>
          유료노선
        </Text>
      </TouchableOpacity>
    </View>
  );
};
