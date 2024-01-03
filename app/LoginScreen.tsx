import { Alert, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { LoginProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import React, { FC, useState } from "react";
import { LoginDataInterface } from "../interfaces/GeneralInterfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginScreen: FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const LoginCheck = async (loginData: LoginDataInterface) => {
    let token: string;

    try {
      const response = await fetch(
        `https://7zclei7sla.execute-api.eu-west-1.amazonaws.com/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      await AsyncStorage.setItem("token", data.token);
      navigation.navigate("Home");
    } catch (error) {
        Alert.alert("Username or Password incorrect!", "Please, try again...")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeform}>
        <Text nativeID="inputUsername" style={styles.homeheading}>
          Username:
        </Text>
        <TextInput
          style={styles.homeinput}
          placeholder="e.g. : HotelEnjoyer_69"
          placeholderTextColor={"#686868"}
          returnKeyLabel="username"
          onChangeText={setUsername}
          value={username}
          accessibilityLabel="inputUsername"
          accessibilityLabelledBy="inputUsername"
          textContentType="username"
          autoComplete="username"
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text nativeID="inputPassword" style={styles.homeheading}>
          Password:
        </Text>
        <TextInput
          style={styles.homeinput}
          placeholder="e.g. : 123456"
          secureTextEntry={true}
          placeholderTextColor={"#686868"}
          returnKeyLabel="Booking"
          onChangeText={setPassword}
          value={password}
          accessibilityLabel="inputPassword"
          accessibilityLabelledBy="inputPassword"
          textContentType="password"
          autoCapitalize="none"
        />
        <Pressable
          style={password.length < 5 ? styles.homebtndisabled : styles.homebtn}
          disabled={password.length < 5 ? true : false}
          onPress={() => {
            const loginData = {
              username: username,
              password: password,
            };

            LoginCheck(loginData);
            setUsername("");
            setPassword("");
          }}
        >
          <Text style={styles.homebtntext}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
