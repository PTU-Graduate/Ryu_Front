import {StyleSheet} from 'react-native';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';
import {Platform} from 'react-native';

export default StyleSheet.create({
  SignLogGreenButtonStyle: {
    marginTop: deviceHeight * 0.13  ,
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.15,
    backgroundColor: '#009B64',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignLogGrayButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.15,
    backgroundColor: '#D9D9D9',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoticeListButtonStyle: {
    width: deviceWidth * 0.9,
    height: deviceWidth * 0.2,
    borderBottomColor: '#C9C6C6',
    borderBottomWidth: 1,
  },
});
