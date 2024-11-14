/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import Icon from 'react-native-vector-icons/Entypo';

interface AllViewBarProps {
  text?: string;
  titletext1?: string;
  titletext2?: string;
  titletext3?: string;
  titletext4?: string;
  detailtext1?: string;
  detailtext2?: string;
  detailtext3?: string;
  detailtext4?: string;
}

/**
 * 조회기능에 들어가는 상세내용 초록색&연두색 제목바
 */
export const GreenViewBar: React.FC<AllViewBarProps> = ({text}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: deviceHeight * 0.004,
      }}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceWidth * 0.11,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.065,
            },
          ]}>
          {text}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceWidth * 0.11,
          marginRight: deviceWidth * 0.87,
        }}></View>
    </View>
  );
};

/**
 * 조회기능에 들어가는 아이콘이 있는 상세내용 초록색&연두색 제목바
 */
export const IconGreenViewBar: React.FC<AllViewBarProps> = ({text}) => {
  return (
    <View style={{alignItems: 'center', marginTop: deviceHeight * 0.01}}>
      <View
        style={{
          backgroundColor: '#49b08c',
          width: deviceWidth * 0.9,
          height: deviceWidth * 0.11,
          position: 'absolute',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={[
            AllTextStyles.SemiBold18,
            {
              color: '#ffffff',
              marginLeft: deviceWidth * 0.065,
            },
          ]}>
          {text}
        </Text>
        <TouchableOpacity>
          <Icon
            style={{marginRight: deviceWidth * 0.02}}
            name="chevron-down"
            size={27}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.03,
          height: deviceWidth * 0.11,
          marginRight: deviceWidth * 0.87,
        }}></View>
    </View>
  );
};

/**
 * 성적조회 페이지 -> 전체 성적목록 상세바
 */
export const AllScoreDetailBar: React.FC<AllViewBarProps> = ({
  titletext1,
  titletext2,
  titletext3,
  titletext4,
  detailtext1,
  detailtext2,
  detailtext3,
  detailtext4,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          marginTop: deviceHeight * 0.035,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: deviceWidth * 0.06,
          paddingLeft: deviceWidth * 0.06,
          flexDirection: 'row',
        }}>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext1}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext2}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext3}
        </Text>
        <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
          {titletext4}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 0.3,
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.06,
          paddingRight: deviceWidth * 0.045,
        }}>
        <View
          style={{
            width: deviceWidth * 0.13,
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext1}</Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.13,
            alignItems: 'center',
            marginLeft: deviceWidth * 0.02,
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext2}</Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.09,
            alignItems: 'center',
            marginLeft: deviceWidth * 0.012,
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext3}</Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.12,
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext4}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * 성적조회 페이지 ->  성적목록 상세바
 */
export const ScoreSemesterDetailBar: React.FC<AllViewBarProps> = ({
  titletext1,
  titletext2,
  titletext3,
  detailtext1,
  detailtext2,
  detailtext3,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#009b64',
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          borderRadius: 6,
          marginTop: deviceHeight * 0.035,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: deviceWidth * 0.25,
            height: deviceHeight * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
            {titletext1}
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.25,
            height: deviceHeight * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
            {titletext2}
          </Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.25,
            height: deviceHeight * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold14, {color: '#ffffff'}]}>
            {titletext3}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 0.3,
          width: deviceWidth * 0.9,
          height: deviceHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: deviceWidth * 0.025,
          paddingRight: deviceWidth * 0.025,
        }}>
        <View
          style={{
            width: deviceWidth * 0.25,
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext1}</Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.25,
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext2}</Text>
        </View>
        <View
          style={{
            width: deviceWidth * 0.25,
            alignItems: 'center',
          }}>
          <Text style={[AllTextStyles.SemiBold15]}>{detailtext3}</Text>
        </View>
      </View>
    </View>
  );
};
