import { Linking, SafeAreaView, Text, View } from "react-native";
import { InfoProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";

export const InfoScreen: React.FC<InfoProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infoheader}>Hotel Info</Text>

      <View style={styles.infotable}>
        <Text
          style={styles.infocell}
          onPress={() => Linking.openURL("tel:+34910555555")}
        >
          Reception phone number: +34 910 555 555
        </Text>
        <Text
          style={styles.infocell}
          onPress={() => Linking.openURL("tel:+34910555556")}
        >
          ROOM Phone NUMBER: +34 910 555 556 #EXT (Room number)
        </Text>
        <Text
          style={styles.infocell}
          onPress={() => Linking.openURL("tel:+34912555555")}
        >
          24H HELPLINE: +34 912 555 555
        </Text>
        <Text
          style={styles.infocell}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/search/?api=1&query=CALLE+DE+LA+PRINCESA,+31.+Madrid+28008"
            )
          }
        >
          Address: CALLE DE LA PRINCESA, 31. Madrid 28008
        </Text>
        <Text
          style={styles.infocell}
          onPress={() => Linking.openURL("tel:+112")}
        >
          EMERGENCY NUMBER: 112
        </Text>
      </View>
    </SafeAreaView>
  );
};
