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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollableTabView, {
  ScrollableTabBar,
} from "../../../Components/react-native-scrollable-tab-view";

const FoodImgOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cheesecake.jpg";

const FoodImgTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg";

const FoodImgThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-StuffedTrout.jpg";

const FoodImgFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-cafeannie.jpg";
const FoodImgFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-kai.jpg";

const FoodImgSix =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-perrys.jpg";

const FoodImgSeven =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-SteakSalad.jpg";

const FoodImgEight =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-ChocolateCake-2.jpg";

var AllCategoriesData = [
  {
    id: 1,
    FoodImg: { uri: FoodImgOne },
    FoodName: "Cheesecake",
  },
  {
    id: 2,
    FoodImg: { uri: FoodImgTwo },
    FoodName: "Cocktail",
  },
  {
    id: 3,
    FoodImg: { uri: FoodImgThree },
    FoodName: "Stuffed Trout",
  },
  {
    id: 4,
    FoodImg: { uri: FoodImgFour },
    FoodName: "cafeannie",
  },
  {
    id: 5,
    FoodImg: { uri: FoodImgFive },
    FoodName: "Stuffed Trout",
  },
  {
    id: 6,
    FoodImg: { uri: FoodImgSix },
    FoodName: "perrys",
  },
  {
    id: 7,
    FoodImg: { uri: FoodImgSeven },
    FoodName: "SteakSalad",
  },
  {
    id: 8,
    FoodImg: { uri: FoodImgEight },
    FoodName: "Chocolate Cake",
  },
];

export default class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: AllCategoriesData,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("ProductDetails");
    return true;
  };

  _renderRow(rowData) {
    var that = this;
    var rowData = rowData.item;

    return (
      <View style={styles.MainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={rowData.FoodImg} style={styles.FoodImg} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="currency-usd"
                color="#c2c4ca"
                size={20}
              />
              <Text style={styles.MoneyText}>$50.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalBorder} />
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductDetails")}
              >
                <View>
                  <AntDesign
                    name="arrowleft"
                    size={25}
                    color="#fff"
                    style={{
                      alignSelf: "center",
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>ALL CATEGORIES</Title>
            </Body>
            <Right style={styles.right}>
              <AntDesign
                name="search1"
                size={20}
                color="#fff"
                style={{
                  alignSelf: "center",
                }}
              />
            </Right>
          </Header>

          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.tabUnderLine}
            tabBarBackgroundColor={"#fff"}
            tabBarActiveTextColor={"#262628"}
            tabBarInactiveTextColor={"#c2c4ca"}
            tabBarTextStyle={styles.tabText}
            style={{
              backgroundColor: "transparent",
              marginTop: Metrics.HEIGHT * 0.02,
            }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <View tabLabel="STARTERS">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9,
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78,
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="MAINS">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9,
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78,
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="SIDES">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9,
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78,
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="DESSERT">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9,
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78,
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollableTabView>
        </Container>
      </View>
    );
  }
}
