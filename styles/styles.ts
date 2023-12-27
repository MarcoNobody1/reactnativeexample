import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  homeform: {
    display: "flex",
    gap: 20,
  },
  homebutton: {
    backgroundColor: "grey",
    padding: 20,
  },
  homeinput: {
    color: "#686868",
    height: 40,
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: "#BEAD8E",
    marginBottom: 42,
    padding: 10,
  },
  homebtn: {
    backgroundColor: "#BEAD8E",
    paddingHorizontal: 81,
    paddingVertical: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homebtndisabled: {
    backgroundColor: "#dbdfe0",
    paddingHorizontal: 81,
    paddingVertical: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  homebtntext: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 2.8,
    color: "#FFF",
  },
  homeheading: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  logoLetterWrapper: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logoLetter: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoUpperText: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "700",
  },
  logoBelowText: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "400",
  },
  linkText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  infoheader: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: "#FFF",
    marginBottom: 54,
  },
  infotable: {
    display:"flex",
    flexDirection:"column",
    justifyContent: "center"
  },
  infocell: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.8,
    textTransform: "uppercase",
    borderWidth: 2,
    borderColor: "#FFF",
    paddingVertical: 20,
    textAlign: "center",
    padding:15,
    color:"#FFF"
  }
});
