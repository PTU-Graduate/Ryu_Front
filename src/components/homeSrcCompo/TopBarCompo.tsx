/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AllBackgroundStyles from '../../styles/AllSrcStyles/AllBackgroundStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import { create } from 'react-test-renderer';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text?: string;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllTitleTopBarCompo: React.FC<AllBackgroundProps> = ({
  text,

}) => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-back" size={25} color="blak" ></Icon>
      <Text style={styles.title}>
        공 지 사 항
      </Text>
      
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10, //container와 아이콘사이의 간격조정
    marginTop: 8,         //container자체를 밑으로 내림
  },
  icon: {
    marginRight: 10,       // 아이콘과 텍스트 사이의 간격
  },
  title: {
    flex: 0.95,            // 남은 공간을 차지하여 중앙 정렬에 기여
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
