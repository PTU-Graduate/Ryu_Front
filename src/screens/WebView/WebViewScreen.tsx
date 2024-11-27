/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {ScreenProps} from '../../navigations/StackNavigator';
import {WebViewDetailProp} from '../../utils/navigationProps/RegiNavigationProps';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';

const WebViewScreen: React.FC<WebViewDetailProp> = ({navigation, route}) => {
  const {url, title} = route.params; // 전달된 URL과 제목

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <AllTitleTopBarCompo
          text={title}
          onPress={() => navigation.goBack()}></AllTitleTopBarCompo>
      </View>
      <View style={{flex: 10}}>
        <WebView source={{uri: url}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
