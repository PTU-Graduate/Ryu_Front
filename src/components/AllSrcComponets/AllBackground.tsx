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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface AllBackgroundProps {
  children?: React.ReactNode;
}

interface AllBackground2Props {
  children?: React.ReactNode;
  srcbottom?: number;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllBackground: React.FC<AllBackgroundProps> = ({children}) => {
  return (
   /*  <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */
      <SafeAreaView style={AllBackgroundStyles.AllBackground}>
        {children}
      </SafeAreaView>
  /*  </TouchableWithoutFeedback> */
  );
};

export const AllScrollBackground: React.FC<AllBackground2Props> = ({
  children,
  srcbottom,
}) => {
  return (
    <ScrollView
      style={AllBackgroundStyles.AllBackground}
      contentContainerStyle={{flexGrow: 1}}
      /*  contentInset={{bottom: deviceHeight * srcbottom}} */
      keyboardShouldPersistTaps="handled">
      <SafeAreaView style={AllBackgroundStyles.AllBackground}>
        {children}
      </SafeAreaView>
    </ScrollView>
  );
};
