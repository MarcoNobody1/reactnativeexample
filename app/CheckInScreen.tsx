import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { CheckInProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import { FC, useState } from "react";

export const CheckInScreen: FC<CheckInProps> = ({ navigation, route }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infoheader}>
        {isChecked
          ? "Thank you, you have successfully checked in"
          : isPressing
          ? "Checking..."
          : ""}
      </Text>

      <View style={styles.infotable}>
        <Text style={styles.tableheading}>
          Booking nº {route.params.booking} details
        </Text>
        <Text style={styles.infocell}>checkin date:</Text>
        <Text style={styles.infocell}>checkout date:</Text>
        <Text style={styles.infocell}>number of guests: </Text>
        <Text style={styles.infocell}>Total price: €</Text>
      </View>
      <Pressable
        style={styles.checkinbtn}
        delayLongPress={2000}
        onPressIn={() => {
          setIsPressing(true);
        }}
        onPressOut={() => {
          setIsPressing(false);
        }}
        onLongPress={() => {
          setIsChecked(true);
          setIsPressing(false);
          Alert.alert(
            "Thanks!",
            "You've successfully checked in. We hope you have a comfortable stay!",
            [
              {
                text: "OK",
                onPress: () => {
                  navigation.navigate("Home");
                },
              },
            ]
          );
        }}
      >
        <Text style={styles.homebtntext}>Done</Text>
      </Pressable>
    </SafeAreaView>
  );
};
