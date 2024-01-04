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
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUsername } from "../features/Login/loginSlice";

export const HomeScreen: FC<HomeProps> = ({ navigation }) => {
  const [bookingNumb, setBookingNumb] = useState<string>("");
  const username = useAppSelector(loginUsername);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeform}>
        <Text>Hello {username ? username : "John Doe"}</Text>
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
          }}
        >
          <Text style={styles.homebtntext}>Check In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
