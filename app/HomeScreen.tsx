import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { HomeProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import React, { FC, useState } from "react";

export const HomeScreen: FC<HomeProps> = ({ navigation }) => {
  const [bookingNumb, setBookingNumb] = useState<string>("");
  let token: string;
  const searchBooking = async (refnumb: string) => {
    try {
      const response = await fetch(
        `https://7zclei7sla.execute-api.eu-west-1.amazonaws.com/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "Marco",
            password: "admin1234",
          }),
        }
      );
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      token = data.token;
    } catch (error) {}

    try {
      const response = await fetch(
        `https://7zclei7sla.execute-api.eu-west-1.amazonaws.com/bookings/search/${refnumb}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );
      const json = await response.json();
      console.log(json);
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeform}>
        <Text style={styles.homeheading}>Booking Reference Number:</Text>
        <TextInput
          style={styles.homeinput}
          placeholder="e.g. : yT_32"
          maxLength={5}
          placeholderTextColor={"#686868"}
          returnKeyLabel="Booking"
          onChangeText={setBookingNumb}
          value={bookingNumb}
          accessibilityLabel="Booking Number Input"
        />
        <Pressable
          style={
            bookingNumb.length !== 5 ? styles.homebtndisabled : styles.homebtn
          }
          disabled={bookingNumb.length !== 5 ? true : false}
          onPress={() => {
            navigation.navigate("CheckIn", { booking: bookingNumb });
            setBookingNumb("");
            searchBooking(bookingNumb);
          }}
        >
          <Text style={styles.homebtntext}>Check In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
