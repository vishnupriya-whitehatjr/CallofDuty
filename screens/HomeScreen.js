import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default class HomeScreen extends React.Component {
  nextScreen = () => {
    this.props.navigation.navigate("GoScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <Text style={styles.displayText}>
            Debugging is the most importanat part of programming since every
            program will always have bugs.
            {"\n"}
            {"\n"}
            One should stay calm,relax and composed while debugging, it will
            help you to debug better.
            {"\n"}
            {"\n"}
            It is always a good practice to print values or statements in
            console or comment the sections of your code to identify and fix
            possible bugs.
            {"\n"}
            {"\n"}
            There are a few bugs in this program..
            {"\n"}
            Let's see if you can identify and fix them to go to the next screen
            {"\n"}
            {"\n"}
            Use the "GO" button...
            {"\n"}
            All the best..!!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.nextScreen();
            }}
          >
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
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
  button: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
