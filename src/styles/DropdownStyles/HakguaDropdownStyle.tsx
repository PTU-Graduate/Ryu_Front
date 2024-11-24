import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export const HukguaDropdownStyle = StyleSheet.create({
  button: {
    width: deviceWidth * 0.9,
    height: deviceWidth * 0.12,
    borderRadius: 6,
    justifyContent: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  dropdown: {
    width: deviceWidth * 0.9,
    position: 'absolute',
    borderRadius: 6,
    marginTop: deviceWidth * 0.135,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.3,
  },
  item: {
    padding: 13,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
