import * as React from "react";
import { Text, View } from "react-native";

import stylesTabDashboard from "../../../styles/styles";

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: "Estadísticas Wally"
  };

  render() {
    return (
      <View style={styles.containerDashboard}>
        <Text style={styles.description}>Enero: 10 kg de basura</Text>
        <Text style={styles.description}>Febrero: 8 kg de basura</Text>
        <Text style={styles.description}>Marzo: 5 kg de basura</Text>
      </View>
    );
  }
}

const styles = stylesTabDashboard;
