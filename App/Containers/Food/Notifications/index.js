import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Platform,
} from "react-native";
import { Container, Right, Header, Left, Title, Body } from "native-base";
import styles from "./styles";
import { Metrics } from "../../../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";

const NotificationDataOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-SteakSalad.jpg";

const NotificationDataTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-StuffedTrout.jpg";

const NotificationDataThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-TBone.jpg";

const NotificationDataFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-burger.jpg";

const NotificationDataFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-cafeannie.jpg";

var NotificationData = [
  {
    id: 1,
    FoodImg: { uri: NotificationDataOne },
    FoodName: "SteakSalad",
    FoodDes:
      "If you're cooking you food properly on your barbeque,you're getting delightful results every time.",
    FoodMin: "20 mins",
  },
  {
    id: 2,
    FoodImg: { uri: NotificationDataTwo },
    FoodName: "Stuffed Trout",
    FoodDes: "Proper cookery renders good food material more digestible",
    FoodMin: "2 hours",
  },
  {
    id: 3,
    FoodImg: { uri: NotificationDataThree },
    FoodName: "TBone",
    FoodDes:
      "Many people understand the concept of passive solar for heating a home",
    FoodMin: "Yesterday",
  },
  {
    id: 4,
    FoodImg: { uri: NotificationDataFour },
    FoodName: "burger",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days",
  },
  {
    id: 5,
    FoodImg: { uri: NotificationDataFive },
    FoodName: "cafeannie",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days",
  },
];

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: NotificationData,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FoodLogin");
    return true;
  };

  _renderRow(rowData) {
    var that = this;
    var rowData = rowData.item;

    return (
      <View style={styles.mainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={rowData.FoodImg} style={styles.FoodImg} />
          <View>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            <Text style={styles.FoodDes}>{rowData.FoodDes}</Text>
            <Text style={styles.FoodMin}>{rowData.FoodMin}</Text>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
      </View>
    );
  }
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity>
                <View>
                  <AntDesign
                    name="search1"
                    size={20}
                    color="#fff"
                    style={{
                      alignSelf: "center",
                      marginLeft: Metrics.HEIGHT * 0.015,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>NOTIFICATIONS</Title>
            </Body>
            <Right style={styles.right} />
          </Header>

          <View style={styles.MainListBg}>
            <FlatList
              data={this.state.dataSource}
              renderItem={this._renderRow.bind(this)}
              enableEmptySections
              pageSize={4}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </Container>
      </View>
    );
  }
}
