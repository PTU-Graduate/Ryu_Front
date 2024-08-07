import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllTitleTopBarCompo: React.FC<AllBackgroundProps> = ({
  text,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-back" size={25} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10, //container와 아이콘사이의 간격조정
  },
  icon: {
    marginRight: 10, // 아이콘과 텍스트 사이의 간격
  },
  title: {
    flex: 0.93, // 남은 공간을 차지하여 중앙 정렬에 기여
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
