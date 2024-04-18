import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';

export default StyleSheet.create({
  SignLogInputStyle: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.05,
    backgroundColor: '#ffffff',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingBottom: deviceHeight * 0.0005,
    fontWeight: 'bold',
  },
});
