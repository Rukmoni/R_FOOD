import React, { Component } from "react";
import { Text, Image } from "react-native";

import WelcomeScreen from "../WelcomeScreen/index";
import OrderHistory from "../OrderHistory/index";
import Favorites from "../Favorites/index";
import Notifications from "../Notifications/index";
import Profiles from "../Profiles/index";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Colors} from "../../../Themes"
import {
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation-tabs";

const TabView = createBottomTabNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="concierge-bell" size={25} color={tintColor} />
        ),
      },
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="text-document" size={25} color={tintColor} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="heart" size={25} color={tintColor} />
        ),
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="notifications" size={25} color={tintColor} />
        ),
      },
    },
    Profiles: {
      screen: Profiles,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: Colors.themePrimary,
      inactiveTintColor: "#c2c4ca",
      showIcon: true,
      showLabel: false,
    },
  }
);
export default TabView;
