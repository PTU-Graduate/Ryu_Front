/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AllButtonStyles from '../../styles/AllSrcStyles/AllButtonStyles';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
interface AllButtonCompoProps {
  children?: React.ReactNode; // 부모, 자식 관계를 선언해주는 것 touchableopacity나 textinput안의 text를 선언할 때
  title?: string;
  date?: string;
  onPress?: () => void;
}

/**
 * 로그인 및 회원가입 화면에 사용되는 초록색 공통 버튼
 */
export const NoticeListButton: React.FC<AllButtonCompoProps> = ({
  children,
  title,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AllButtonStyles.NoticeListButtonStyle}
      onPress={onPress}>
      {children}
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 7,
            alignItems: 'center',
            justifyContent: 'center',
            width: deviceWidth * 0.8,
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {color: '#009b64', lineHeight: 22},
            ]}>
            {'[공지]  '}
            <Text style={[AllTextStyles.SemiBold16, {color: '#000000'}]}>
              {title}
            </Text>
          </Text>
        </View>
        <View>
          <Icon
            style={{
              marginTop: deviceHeight * 0.016,
              marginLeft: deviceWidth * 0.02,
              color: '#666666',
            }}
            name="chevron-right"
            size={25}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiThin10,
            {
              marginBottom: deviceHeight * 0.01,
              marginRight: deviceWidth * 0.02,
            },
          ]}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
