/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AllTextStyles from '../../../styles/AllSrcStyles/AllTextStyles';
import {deviceHeight, deviceWidth} from '../../../utils/DeviceUtils';
import Entypo from 'react-native-vector-icons/Entypo';
import {HukguaDropdownStyle} from '../../../styles/DropdownStyles/HakguaDropdownStyle';
import {setSTDData} from '../../../utils/DataTableSet/utils/HakguaUtil';

interface DropDownProps {
  onSelected?: (item: string) => void;
}

export const HukguaDropdown: React.FC<DropDownProps> = ({onSelected}) => {
  const data = [
    '스마트모빌리티학과',
    '융합소프트웨어학과',
    '정보통신학과',
    '데이터정보학과',
    'ICT융합학부',
    '국제물류학과',
    '국제무역행정학과',
    '도시계획부동산학과',
    '경영학과',
    '국제지역학부',
    '사회복지학과',
    '재활상담학과',
    '아동청소년교육상담학과',
    '간호학과',
    '신학과',
    ' 광고홍보학과',
    '커뮤니케이션디자인학과',
    '패션디자인및브랜딩학과',
    '연극영화과',
    '실용음악학과',
    '음악학과',
  ];
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
    if (onSelected) {
      onSelected(item); // 선택된 값을 상위로 전달
      setSelectedItem(item);
    }
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <View>
      <TouchableOpacity
        style={HukguaDropdownStyle.button}
        onPress={handleToggleDropdown}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AllTextStyles.medium14,
              {
                color: '#000000',
                width: deviceWidth * 0.73,
                height: deviceHeight * 0.02,
                marginTop: deviceWidth * 0.06,
              },
            ]}>
            {selectedItem || '학과'}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              style={{
                marginTop: deviceHeight * 0.025,
                marginLeft: deviceWidth * 0.05,
              }}
              name="chevron-small-down"
              size={28}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View
          style={[HukguaDropdownStyle.dropdown, {transform: [{translateY}]}]}>
          <ScrollView style={{maxHeight: deviceHeight * 0.4}}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={HukguaDropdownStyle.item}
                onPress={() => handleSelectItem(item)}>
                <Text style={AllTextStyles.SemiBold13}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default HukguaDropdown;
