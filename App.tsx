import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./app/HomeScreen";
import { CheckInScreen } from "./app/CheckInScreen";
import { RootStackParamList } from "./interfaces/NavigationInterfaces";
import { Logo } from "./components/logo";
import { Pressable, Text } from "react-native";
import { styles } from "./styles/styles";
import { InfoScreen } from "./app/InfoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: (props) => <Logo navigation={navigation} />,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Info")}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
