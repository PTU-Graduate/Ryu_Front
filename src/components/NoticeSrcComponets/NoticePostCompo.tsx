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
  text?: string;
  onPress?: () => void;
}

/**
 * 공지사항 화면에 사용되는 공통 버튼
 */
const NoticeListButton: React.FC<AllButtonCompoProps> = ({
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
            width: deviceWidth * 0.8,
            flexDirection: 'row',
          }}>
          <Text
            style={[
              AllTextStyles.SemiBold16,
              {
                color: '#009b64',
                marginTop: deviceHeight * 0.02,
              },
            ]}>
            {'[공지]  '}
          </Text>
          <View style={{width: deviceWidth * 0.69}}>
            <Text
              style={[
                AllTextStyles.SemiBold16,
                {color: '#000000', marginTop: deviceHeight * 0.02},
              ]}>
              {title}
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon
            style={{
              marginLeft: deviceWidth * 0.02,
              color: '#979797',
            }}
            name="chevron-right"
            size={30}
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

export const NoticeDeatilText: React.FC<AllButtonCompoProps> = ({text}) => {
  return (
    <Text style={[AllTextStyles.SemiThin15, {marginTop: deviceWidth * 0.05}]}>
      {text}
    </Text>
  );
};

export default NoticeListButton;
