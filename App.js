import * as React from "react";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GoScreen from "./screens/GoScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  GoScreen: GoScreen,
});

const AppContainer = createAppContainer(AppNavigator);
