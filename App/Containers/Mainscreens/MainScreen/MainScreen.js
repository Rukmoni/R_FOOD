import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  BackHandler,
  Alert,
  Platform,
  ScrollView,
  LogBox
} from "react-native";
import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
} from "native-base";

import styles from "./styles";
import { Images, Metrics } from "../../../Themes/";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      user_Back: "false",
    };
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount=======");

    BackHandler.addEventListener("hardwareBackPress", function () {
      Alert.alert(
        "Quit App?",
        "Are you sure you want to exit App?",
        [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => true },
        ],
        { cancelable: true }
      );
      return true;
    });

   
  }

  componentDidMount() {
    this.setState({ isModalVisible: true });
    AsyncStorage.multiGet(["user_Back"]).then((data) => {
      console.log(data[0][1]);
      if (data[0][1] != null) {
        this.setState({ user_Back: data[0][1] });
      } else {
        this.setState({ user_Back: "true" });
      }
    });

    AsyncStorage.multiSet([["ScreenName", "FirstScreen"]]);
  }

  _toggleModal = () => this.setState({ isModalVisible: false });

  _moveToFood() {
    this.props.navigation.navigate("MainStackFood");
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
  

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <StatusBar barStyle="light-content" backgroundColor="grey" />
          <Left style={styles.left} />

          <Body style={styles.body}>
            <Title>Antiqueruby</Title>
          </Body>

          <Right style={styles.right} />
        </Header>

        <View style={styles.mainView}>
          <Content>
            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => this._moveToFood()}
              >
                <Text style={styles.buttonText}>Food Material UI</Text>
              </TouchableOpacity>
            </View>
          </Content>
        </View>

        
      </Container>
    );
  }
}
