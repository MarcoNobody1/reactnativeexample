import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { LogoProps } from "../interfaces/NavigationInterfaces";
import { FC } from "react";

export const Logo: FC<LogoProps> = ({ navigation }) => {
  return (
    <View
      style={styles.logoWrapper}
      onTouchStart={() => navigation.navigate('Home')}
    >
      <View style={styles.logoLetterWrapper}>
        <Text style={styles.logoLetter}>H</Text>
      </View>
      <View>
        <Text style={styles.logoUpperText}>Hotel</Text>
        <Text style={styles.logoBelowText}>Miranda</Text>
      </View>
    </View>
  );
};
