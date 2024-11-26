import {Platform, StyleSheet} from 'react-native';
import {deviceHeight} from '../../utils/DeviceUtils';

export default StyleSheet.create({
  AISemiBold13: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
  },
  AIDSemiBold13: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: Platform.OS === 'ios' ? null : deviceHeight * 0.005,
  },
});
