import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./app/HomeScreen";
import { CheckInScreen } from "./app/CheckInScreen";
import { RootStackParamList } from "./interfaces/NavigationInterfaces";
import { Logo } from "./components/logo";
import { Alert, Pressable, Text } from "react-native";
import { styles } from "./styles/styles";
import { InfoScreen } from "./app/InfoScreen";
import { LoginScreen } from "./app/LoginScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ navigation }) => ({
          headerTitle: (props) => <Logo navigation={navigation}/>,
          headerRight: () => (
            <Pressable
              onPress={() =>
                logged
                  ? navigation.navigate("Info")
                  : Alert.alert("You're not logged")
              }
            >
              <Text style={styles.linkText}>Info</Text>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: "#BEAD8E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        {logged ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Hotel Miranda" }}
            />
            <Stack.Screen
              name="CheckIn"
              component={CheckInScreen}
              options={{ title: "Check In" }}
            />
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              options={({ navigation }) => ({
                title: "Info",

                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.linkText}>Home</Text>
                  </Pressable>
                ),
              })}
            />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
