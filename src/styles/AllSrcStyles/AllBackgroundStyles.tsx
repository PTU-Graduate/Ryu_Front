import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  AllBackground: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    paddingTop: getStatusBarHeight(),
  },
});
