import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [{ key: "One" }, { key: "Two" }]
    };
  }

  _getGridViewItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.gridViewColumns}>
              <Text
                style={styles.gridViewItem}
                onPress={this._getGridViewItem.bind(this, item.key)}
              >
                {item.key}
              </Text>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 30
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  gridViewColumns: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#00BCD4"
  },
  gridViewItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    color: "#34fe65",
    padding: 10,
    fontSize: 10
  }
});
