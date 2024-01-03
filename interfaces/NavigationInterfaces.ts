import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  CheckIn: { booking: string };
  Info: undefined;
  Logo: undefined;
  Login: undefined;
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

export type LoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};
