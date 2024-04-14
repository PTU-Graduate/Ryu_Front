/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import AllBackgroundStyles from '../../styles/AllSrcStyles/AllBackgroundStyles';
import {ScrollView} from 'react-native-gesture-handler';

interface AllBackgroundProps {
  children?: React.ReactNode;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllBackground: React.FC<AllBackgroundProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={AllBackgroundStyles.AllBackground}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
