/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { deviceHeight, deviceWidth } from '../../../utils/DeviceUtils';
import AllTextStyles from '../../../styles/AllSrcStyles/AllTextStyles';
import { GradeDropdownStyle } from '../../../styles/DropdownStyles/GradeYearDropdownStyle';

interface DropDownProps {
  onSelected?: (item: string) => void;
}

export const GradeHakgiDropdown: React.FC<DropDownProps> = ({onSelected}) => {
  const data = ['1학기', '2학기'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const translateY = useRef(new Animated.Value(-30)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const handleToggleDropdown = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: isOpen ? -10 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsOpen(!isOpen);
    });
  };

  const handleSelectItem = (item: string) => {
    handleToggleDropdown();
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <View>
      <TouchableOpacity
        style={GradeDropdownStyle.button}
        onPress={handleToggleDropdown}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: deviceWidth * 0.013,
          }}>
          <Text
            style={[
              AllTextStyles.medium14,
              {
                color: '#000000',
              },
            ]}>
            {selectedItem || '1학기'}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              style={{
                marginTop: deviceWidth * -0.011,
                marginLeft: deviceWidth * 0.01,
              }}
              name="chevron-small-down"
              size={26}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View
          style={[GradeDropdownStyle.dropdown2, {transform: [{translateY}]}]}>
          <ScrollView style={{maxHeight: deviceHeight * 0.5}}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={GradeDropdownStyle.item2}
                onPress={() => handleSelectItem(item)}>
                <Text style={AllTextStyles.medium13}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default GradeHakgiDropdown;
