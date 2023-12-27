import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Info: { name: string };
};

export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export type InfoProps = NativeStackScreenProps<RootStackParamList, "Info">;
