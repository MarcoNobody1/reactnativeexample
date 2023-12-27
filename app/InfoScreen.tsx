import { Text } from "react-native";
import { InfoProps } from "../interfaces/NavigationInterfaces";



export const InfoScreen: React.FC<InfoProps> = ({ route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
