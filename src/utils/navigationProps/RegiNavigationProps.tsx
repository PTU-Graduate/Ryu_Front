import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/StackNavigator';

/**
 * @param 학번 스크린 데이터
 */
type RegiHakbunRouteProp = RouteProp<RootStackParamList, 'RegiHakbun'>;
type RegiHakbunNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RegiHakbun'
>;

export type RegiHakbunProps = {
  route: RegiHakbunRouteProp;
  navigation: RegiHakbunNavigationProp;
};
/* ---------------------------------------------------------------------------------- */

/**
 * @param 이름 스크린 데이터
 */
type RegiNameRouteProp = RouteProp<RootStackParamList, 'RegiName'>;
type ReginameNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RegiName'
>;
export type RegiNameProps = {
  route: RegiNameRouteProp;
  navigation: ReginameNavigationProp;
};

/* ---------------------------------------------------------------------------------- */

/**
 * @param 아이디 스크린 데이터
 */
type RegiIDRouteProp = RouteProp<RootStackParamList, 'RegiID'>;
type RegiIDNavigationProp = StackNavigationProp<RootStackParamList, 'RegiID'>;
export type RegiIDProps = {
  route: RegiIDRouteProp;
  navigation: RegiIDNavigationProp;
};

/* ---------------------------------------------------------------------------------- */

/**
 * @param 비밀번호 스크린 데이터
 */
type RegiPassRouteProp = RouteProp<RootStackParamList, 'RegiPass'>;
type RegiPassNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RegiPass'
>;
export type RegiPassProp = {
  route: RegiPassRouteProp;
  navigation: RegiPassNavigationProp;
};
