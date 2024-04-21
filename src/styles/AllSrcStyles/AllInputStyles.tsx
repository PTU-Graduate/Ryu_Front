import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

export default StyleSheet.create({
  SignLogInputStyle: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.05,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingTop: deviceHeight * 0.015,
    paddingLeft: deviceWidth * 0.01,
    fontWeight: 'bold',
  },
});
