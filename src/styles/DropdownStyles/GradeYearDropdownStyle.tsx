import {StyleSheet} from 'react-native';
import {deviceWidth} from '../../utils/DeviceUtils';

export const GradeDropdownStyle = StyleSheet.create({
  button: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.12,
  },
  dropdown: {
    width: deviceWidth * 0.2,
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 6,
    marginTop: deviceWidth * 0.06,
    marginLeft: deviceWidth * -0.02,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.3,
  },
  dropdown2: {
    width: deviceWidth * 0.18,
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 6,
    marginTop: deviceWidth * 0.06,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.3,
  },
  item: {
    padding: 9,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  item2: {
    padding: 9,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
