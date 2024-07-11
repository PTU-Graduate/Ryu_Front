/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AllBackgroundStyles from '../../styles/AllSrcStyles/AllBackgroundStyles';

interface AllBackgroundProps {
  children?: React.ReactNode;
}

/**
 * 가장 기본 베이스 백그라운드 화면
 */
export const AllBackground: React.FC<AllBackgroundProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{backgroundColor: '#ffffff'}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <SafeAreaView
            onStartShouldSetResponder={() => true}
            style={AllBackgroundStyles.AllBackground}>
            {children}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
