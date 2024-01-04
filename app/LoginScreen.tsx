import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { LoginProps } from "../interfaces/NavigationInterfaces";
import { styles } from "../styles/styles";
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userLogin } from "../features/Login/loginThunks";
import { loginStatus, resetState } from "../features/Login/loginSlice";

export const LoginScreen: FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const status = useAppSelector(loginStatus);

  useEffect(() => {
    if (status === "fulfilled") {
      navigation.navigate("Home");
    }
  }, [status]);

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

            dispatch(userLogin(loginData));
            setUsername("");
            setPassword("");
          }}
        >
          <Text style={styles.homebtntext}>
            {status === "pending" ? (
              <ActivityIndicator size={"small"} />
            ) : (
              "Login"
            )}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
