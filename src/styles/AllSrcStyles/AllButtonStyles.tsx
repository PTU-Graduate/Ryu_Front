import {StyleSheet} from 'react-native';
import {deviceWidth, deviceHeight} from '../../utils/DeviceUtils';

export default StyleSheet.create({
  SignLogGreenButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.075,
    backgroundColor: '#009B64',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignLogGrayButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.08,
    backgroundColor: '#D9D9D9',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoticeListButtonStyle: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.1,
    borderBottomColor: '#C9C6C6',
    borderBottomWidth: 1,
  },
});
