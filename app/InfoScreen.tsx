import { SafeAreaView, Text } from "react-native";
import { InfoProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";

export const InfoScreen: React.FC<InfoProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is info's screen</Text>
    </SafeAreaView>
  );
};
