import * as React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import TabController from "./tab-controller/controller";
import TabDashboard from "./tab-dashboard/dashboard";

const TabsControl = createBottomTabNavigator(
  {
    Controller: {
      screen: TabController,
      navigationOptions: () => ({ title: "Controlar Wally" })
    },
    Dashboard: {
      screen: TabDashboard,
      navigationOptions: () => ({ title: "Estadísticas Wally" })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Controller") {
          iconName = `google-controller${focused ? "" : "-off"}`;
        } else if (routeName === "Dashboard") {
          iconName = `chart-bar${focused ? "" : "-stacked"}`;
        }
        return (
          <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#32CD32",
      inactiveTintColor: "#656565"
    }
  }
);

export default TabsControl;
