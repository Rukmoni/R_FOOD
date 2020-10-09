import { Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
const { width, height } = Dimensions.get("window");

import FirstScreen from "../Containers/Mainscreens/MainScreen/MainScreen";

/* Antiqueruby Screens List START */

/* Food List START */
import SearchResultOne from "../Containers/Food/SearchResultOne/index";
import FoodLogin from "../Containers/Food/FoodLogin/index";
import ProductDetails from "../Containers/Food/ProductDetails/index";
import TabView from "../Containers/Food/TabView/index";
import BookTable from "../Containers/Food/BookTable/index";
import AllCategories from "../Containers/Food/AllCategories/index";
import Reviews from "../Containers/Food/Reviews/index";
import SearchScreen from "../Containers/Food/SearchScreen/index";
import PaymentMethod from "../Containers/Food/PaymentMethod/index";
/* Food List END */

/*Food Drawer START*/
const MainStackFood = createStackNavigator(
  {
    FoodLogin: { screen: FoodLogin },
    SearchResultOne: { screen: SearchResultOne },
    ProductDetails: { screen: ProductDetails },
    TabView: { screen: TabView },
    BookTable: { screen: BookTable },
    AllCategories: { screen: AllCategories },
    Reviews: { screen: Reviews },
    SearchScreen: { screen: SearchScreen },
    PaymentMethod: { screen: PaymentMethod },
  },
  {
    headerMode: "none",
    navigationOptions: {
      gestureEnabled: false,
    },
  }
);
/*Food Drawer END*/

// main stack
const MainStack = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const PrimaryNav = createStackNavigator(
  {
    mainStack: { screen: MainStack },
    MainStackFood: { screen: MainStackFood },
  },
  {
    headerMode: "none",
    initialRouteName: "mainStack",
    gesturesEnabled: false,
  }
);

// const App = createAppContainer(PrimaryNav);

export default createAppContainer(PrimaryNav);
