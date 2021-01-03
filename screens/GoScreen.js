import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default class GoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <Text style={styles.displayText}>
            Wow!! Congrats, you have debugged the code!! {"\n"} {"\n"}
            You are doing a great progress in React Native, Keep going!!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  displayText: {
    color: "black",
    marginTop: "30%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
  },
});
