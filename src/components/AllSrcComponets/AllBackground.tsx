/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import AllBackgroundStyles from '../../styles/AllSrcStyles/AllBackgroundStyles';
import {deviceHeight} from '../../utils/DeviceUtils';

interface AllBackgroundProps {
  children?: React.ReactNode;
  srcbottom: number;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllBackground: React.FC<AllBackgroundProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={AllBackgroundStyles.AllBackground}>
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export const AllScrollBackground: React.FC<AllBackgroundProps> = ({
  children,
  srcbottom,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        contentInset={{bottom: deviceHeight * srcbottom}}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={AllBackgroundStyles.AllBackground}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
