import { createAppContainer, createStackNavigator } from "react-navigation";
import HomePage from "./src/screens/home-page";
import LogIn from "./src/screens/log-in";
import SignUp from "./src/screens/sign-up";
import Settings from "./src/screens/settings-page";
import TabsControl from "./src/screens/tabs-control-page";

const AppStack = createStackNavigator({
  LogIn: { screen: LogIn },
  SignUp: { screen: SignUp },
  Home: { screen: HomePage },
  Settings: { screen: Settings },
  TabsControl: { screen: TabsControl }
});

const App = createAppContainer(AppStack);

export default App;
