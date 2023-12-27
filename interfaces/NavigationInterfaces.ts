import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  CheckIn: { booking: string };
  Info: undefined;
  Logo: undefined;
};

export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export type CheckInProps = NativeStackScreenProps<
  RootStackParamList,
  "CheckIn"
>;

export type InfoProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Info">;
};

export type LogoProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Logo">;
};