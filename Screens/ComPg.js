import React, { useEffect, Component } from "react";
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
// import styles from "../assets/styles/haeilstyle";
import { SvgXml } from "react-native-svg";
import HomeSvg from "../svgs/HomeSvg";
import CoachSvg from "../svgs/CoachSvg";
import ComSvg from "../svgs/ComSvgBlack";
import MypgSvg from "../svgs/MypgSvg";
import ScheSvg from "../svgs/ScheSvgXml";

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginRight: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Image
            style={{ flex: 1, margin: 10, width: 100 }}
            source={{ uri: this.props.item.imageUrl }}
          ></Image>

          <Text style={{ flex: 1 }}>{this.props.item.key}</Text>
        </View>
      </View>
    );
  }
}

function CoachPg({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 23, marginTop: "7%", fontWeight: "bold" }}>
          커뮤니티
        </Text>
      </View>

      <View style={styles.main}>
        <View style={{ flex: 1, marginTop: 22, justifyContent: "center" }}>
          <FlatList
            data={flatListData}
            horizontal={true}
            renderItem={({ item, index }) => {
              // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
              return <FlatListItem item={item} index={index} />;
            }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={{ alignItems: "center" }}
        >
          <HomeSvg />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("CoachPg")}
          style={{ alignItems: "center" }}
        >
          <CoachSvg />
          <Text>코칭기록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("SchePg")}
          style={{ alignItems: "center" }}
        >
          <ScheSvg />
          <Text>스케줄</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("ComPg")}
          style={{ alignItems: "center" }}
        >
          <ComSvg />
          <Text>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("MyPg")}
          style={{ alignItems: "center" }}
        >
          <MypgSvg />
          <Text>마이페이지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CoachPg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // padding: "10%",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  MoHeader: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "row",
  },
  SysHeader: {
    // borderBottomColor: "green",
    // borderColor: "white",

    backgroundColor: "white",

    // borderRadius: 5,
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  SysHeader1: {
    backgroundColor: "white",
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "stretch",
  },
  main: {
    paddingTop: "7%",
    paddingLeft: "7%",
    paddingRight: "7%",
    // backgroundColor: "red",
    flex: 6,
  },
  // main: {
  //   // backgroundColor: "blue",
  //   flex: 6,
  // },
  footer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  item: {
    flex: 5 / 6,

    // marginHorizontal: 16,
  },
  num: {
    flex: 1 / 6,
    // marginRight: "80%",
  },
  title: {
    fontSize: 30,
  },
  scho: {
    fontSize: 15,
  },
  psysical: {
    fontSize: 15,
  },
  score: {
    fontSize: 32,
  },
  day: {
    fontSize: 15,
  },
});
