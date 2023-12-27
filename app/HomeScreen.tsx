import { Button, View } from "react-native";
import { HomeProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";

export const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Info", { name: "Jane" })}
      />
    </View>
  );
};
