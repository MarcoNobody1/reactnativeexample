import { SafeAreaView, Text } from "react-native";
import { CheckInProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import { FC } from "react";

export const CheckInScreen: FC<CheckInProps> = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is {route.params.booking}'s profile</Text>
    </SafeAreaView>
  );
};
