import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: "Estadisiticas Wally"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enero: 10 kg de basura</Text>
        <Text>Febrero: 8 kg de basura</Text>
        <Text>Marzo: 5 kg de basura</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 65,
    padding: 30
  }
});
