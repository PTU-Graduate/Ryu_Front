import React, {useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {deviceHeight, deviceWidth} from '../utils/DeviceUtils'; // 장치의 해상도에 맞춰 조정

// CustomBottomTabBarProps 타입 정의
type CustomBottomTabBarProps = BottomTabBarProps & {
  // 추가적으로 필요한 타입이 있다면 여기에 정의
};

const CustomTabBar = (props: CustomBottomTabBarProps) => {
  const {state, descriptors, navigation} = props;

  if (!state.routes || state.routes.length === 0) {
    return null; // routes가 없거나 비어있을 경우 null 반환
  }

  const Drawer = createDrawerNavigator(); // 드로어 네비게이터 생성

  const handlePressHome = () => {
    navigation.navigate('Home'); // 'Home'은 홈 스크린의 라우트 이름
  };

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 "Home" 라우트로 이동
    navigation.navigate('Home');
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name === 'DrawerNavigation') {
            // DrawerNavigation을 눌렀을 때 실행할 동작
            navigation.dispatch(DrawerActions.openDrawer());
            // 여기에 원하는 작업을 추가하세요.
          } else {
            // 다른 탭을 눌렀을 때 실행할 동작
            console.log('다른 탭이 눌렸습니다.');
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;
        let buttonStyle = styles.tabButton;
        switch (route.name) {
          case 'DrawerNavigation':
            iconName = isFocused ? 'menu' : 'menu-outline';
            break;
          case 'Search':
            iconName = isFocused ? 'search' : 'search-outline';

            // @ts-ignore
            buttonStyle = {...buttonStyle, marginRight: deviceWidth * 0.05}; // Search 오른쪽으로 조금 더 이동
            break;
          case 'Setting':
            iconName = isFocused ? 'settings' : 'settings-outline';
            break;
          case 'Profile':
            iconName = isFocused ? 'person' : 'person-outline';

            // @ts-ignore
            buttonStyle = {...buttonStyle, marginLeft: deviceWidth * 0.05}; // Profile 왼쪽으로 조금 더 이동
            break;
          default:
            iconName = 'alert-circle-outline';
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={buttonStyle}>
            <Icon
              name={iconName}
              size={deviceHeight > 800 ? 30 : 25} // 기기의 높이에 따라 아이콘 크기 조정
              color={isFocused ? 'black' : 'gray'}
            />
          </TouchableOpacity>
        );
      })}
      <View style={styles.centralIconContainer}>
        <TouchableOpacity onPress={handlePressHome}>
          <Image
            source={require('../assets/images/PTULOGO.png')}
            style={styles.centralIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: deviceHeight * 0.075,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralIconContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: -deviceHeight * 0.04,
    left: '50%',
    transform: [{translateX: -(deviceWidth * 0.1)}],
    zIndex: 1,
  },
  centralIcon: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.2,
  },
});

export default CustomTabBar;
