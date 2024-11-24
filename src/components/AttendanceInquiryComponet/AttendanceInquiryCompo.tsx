/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';
import Icon from 'react-native-vector-icons/Entypo';

interface AllViewBarProps {
  Titletext?: string;
  SBNtext?: string;
  SBTtext?: string;
  ATnumber?: string;
  LAnumber?: string;
  ABnumber?: string;
  onPress?: () => void;
}

/**
 * 전공 출석 박스
 */
export const MJDetailBar: React.FC<AllViewBarProps> = ({
  Titletext,
  SBNtext,
  SBTtext,
  ATnumber,
  LAnumber,
  ABnumber,
  onPress,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.22,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            borderColor: '#B4B4B4',
            borderWidth: 0.5,
            shadowColor: '#B4B4B4',
            shadowRadius: 1,
            shadowOpacity: 100,
            shadowOffset: {width: 2, height: 2},
            marginBottom: deviceWidth * 0.035,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{marginLeft: deviceWidth * 0.035}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: deviceWidth * 0.148,
                  height: deviceWidth * 0.06,
                  backgroundColor: '#009B64',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[AllTextStyles.SemiBold15, {color: '#ffffff'}]}>
                  {Titletext}
                </Text>
              </View>
              <View style={{width: deviceWidth * 0.6}}>
                <View>
                  <Text
                    style={[
                      AllTextStyles.SemiThin10,
                      {
                        marginLeft: deviceWidth * 0.03,
                        marginTop: deviceWidth * -0.01,
                        marginBottom: deviceWidth * 0.006,
                      },
                    ]}>
                    {SBNtext}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      AllTextStyles.SemiBold13,
                      {
                        marginLeft: deviceWidth * 0.03,
                        marginBottom: deviceWidth * 0.02,
                      },
                    ]}>
                    {SBTtext}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: deviceWidth * 0.005}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.23,
                  marginLeft: deviceWidth * 0.06,
                }}>
                <Text style={AllTextStyles.medium13}>출석</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{ATnumber}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.23,
                }}>
                <Text style={AllTextStyles.medium13}>지각</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{LAnumber}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.2,
                }}>
                <Text style={AllTextStyles.medium13}>결석</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{ABnumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Icon
              style={{color: '#B4B4B4', marginLeft: deviceWidth * 0.045}}
              name="chevron-thin-right"
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * 교양 출석 박스
 */
export const RDDetailBar: React.FC<AllViewBarProps> = ({
  Titletext,
  SBNtext,
  SBTtext,
  ATnumber,
  LAnumber,
  ABnumber,
  onPress,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: deviceWidth * 0.9,
            height: deviceWidth * 0.22,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            borderColor: '#B4B4B4',
            borderWidth: 0.5,
            shadowColor: '#B4B4B4',
            shadowRadius: 1,
            shadowOpacity: 100,
            shadowOffset: {width: 2, height: 2},
            marginBottom: deviceWidth * 0.035,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{marginLeft: deviceWidth * 0.035}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: deviceWidth * 0.148,
                  height: deviceWidth * 0.06,
                  borderColor: '#009B64',
                  borderWidth: 1.5,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[AllTextStyles.SemiBold15, {color: '#009B64'}]}>
                  {Titletext}
                </Text>
              </View>
              <View style={{width: deviceWidth * 0.6}}>
                <View>
                  <Text
                    style={[
                      AllTextStyles.SemiThin10,
                      {
                        marginLeft: deviceWidth * 0.03,
                        marginTop: deviceWidth * -0.01,
                        marginBottom: deviceWidth * 0.006,
                      },
                    ]}>
                    {SBNtext}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      AllTextStyles.SemiBold13,
                      {
                        marginLeft: deviceWidth * 0.03,
                        marginBottom: deviceWidth * 0.02,
                      },
                    ]}>
                    {SBTtext}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: deviceWidth * 0.005}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.23,
                  marginLeft: deviceWidth * 0.06,
                }}>
                <Text style={AllTextStyles.medium13}>출석</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{ATnumber}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.23,
                }}>
                <Text style={AllTextStyles.medium13}>지각</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{LAnumber}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: deviceWidth * 0.2,
                }}>
                <Text style={AllTextStyles.medium13}>결석</Text>
                <View
                  style={{
                    width: deviceWidth * 0.002,
                    height: deviceWidth * 0.035,
                    backgroundColor: '#000000',
                    marginLeft: deviceWidth * 0.015,
                    marginRight: deviceWidth * 0.015,
                  }}
                />
                <Text style={AllTextStyles.medium13}>{ABnumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Icon
              style={{color: '#B4B4B4', marginLeft: deviceWidth * 0.045}}
              name="chevron-thin-right"
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
