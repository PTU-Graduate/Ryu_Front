import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/StackNavigator";

type RegiHakbunRouteProp = RouteProp<RootStackParamList, "RegiHakbun">;
type RegiHakbunNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RegiHakbun"
>;

export type RegiHakbunProps = {
  route: RegiHakbunRouteProp;
  navigation: RegiHakbunNavigationProp;
};