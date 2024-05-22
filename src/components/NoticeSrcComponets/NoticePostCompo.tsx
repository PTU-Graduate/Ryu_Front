/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {deviceHeight} from '../../utils/DeviceUtils';
interface AllButtonCompoProps {
  children?: React.ReactNode; // 부모, 자식 관계를 선언해주는 것 touchableopacity나 textinput안의 text를 선언할 때
  title?: string;
  date?: string;
  onPress?: () => void;
}

/**
 * 로그인 및 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const SignLogBlackButton: React.FC<AllButtonCompoProps> = ({
  children,
  title,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AllButtonStyles.SignLogBlackButtonStyle}
      onPress={onPress}>
      {children}
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
        }}>
        <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[AllTextStyles.SemiBold17, {color: '#009b64'}]}>
            {'[공지]  '}
            <Text style={[AllTextStyles.SemiBold17, {color: '#000'}]}>
              2024학년도 2학기 중국 자매대학 파견 교환학생 모집 공고{title}
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: deviceHeight * 0.02,
          }}>
          <Icon name="chevron-right" size={30}></Icon>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <Text style={AllTextStyles.SemiThin}>2024.03.27{date}</Text>
      </View>
    </TouchableOpacity>
  );
};
