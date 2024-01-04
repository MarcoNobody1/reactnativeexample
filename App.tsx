import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./interfaces/NavigationInterfaces";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./Routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
