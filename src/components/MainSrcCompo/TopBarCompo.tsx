import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/Entypo';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface AllBackgroundProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  onPressplus?: () => void;
  isLoading?: boolean; // 로딩 상태를 받아 처리
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

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const DrawerTitleTopBarCompo: React.FC<AllBackgroundProps> = ({
  text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>{text}</Text>
    </View>
  );
};

export const AllNoticeTitleTopBarCompo: React.FC<AllBackgroundProps> = ({
  text,
  onPress,
  onPressplus,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-back" size={25} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
      <TouchableOpacity onPress={onPressplus}>
        <IconPlus name="plus" size={25} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export const AllAddTitleTopBarCompo: React.FC<AllBackgroundProps> = ({
  text,
  onPress,
  onPressplus,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-back" size={25} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
      <TouchableOpacity
        onPress={isLoading ? undefined : onPressplus} // 로딩 중에는 onPressplus 비활성화
        disabled={isLoading} // 로딩 중 버튼 비활성화
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#000000" />
        ) : (
          <Icon name="send-sharp" size={25} color="#000000" />
        )}
      </TouchableOpacity>
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
  container2: {
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
  title2: {
    flex: 1, // 남은 공간을 차지하여 중앙 정렬에 기여
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
