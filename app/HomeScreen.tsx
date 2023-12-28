import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { HomeProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import React, { FC, useEffect, useState } from "react";

export const HomeScreen: FC<HomeProps> = ({ navigation }) => {
  const [bookingNumb, setBookingNumb] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeform}>
        <Text style={styles.homeheading}>Booking Reference Number:</Text>
        <TextInput
          style={styles.homeinput}
          placeholder="e.g. : 0000"
          keyboardType="number-pad"
          maxLength={4}
          placeholderTextColor={"#686868"}
          returnKeyLabel="Booking"
          onChangeText={setBookingNumb}
          value={bookingNumb}
          accessibilityLabel="Booking Number Input"
        />
        <Pressable
          style={
            bookingNumb.length !== 4 ? styles.homebtndisabled : styles.homebtn
          }
          disabled={bookingNumb.length !== 4 ? true : false}
          onPress={() => {
            navigation.navigate("CheckIn", { booking: bookingNumb });
            setBookingNumb("");
          }}
        >
          <Text style={styles.homebtntext}>Check In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
