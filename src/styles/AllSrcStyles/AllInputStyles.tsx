import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

export default StyleSheet.create({
  SignLogInputStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.08,
    backgroundColor: '#ffffff',
    borderBottomColor: '#C9C6C6',
    borderBottomWidth: 0.5,
    paddingTop: 25,
  },
});
