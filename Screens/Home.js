import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  ListViewBase,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { SvgUri } from "react-native-svg";
import { SvgXml } from "react-native-svg";
import SVGImg from "../assets/record.svg";
import HomeSvg from "../svgs/HomeSvgBlack";
import CoachSvg from "../svgs/CoachSvg";
import ComSvg from "../svgs/ComSvg";
import MypgSvg from "../svgs/MypgSvg";
import ScheSvg from "../svgs/ScheSvgXml";

// import styles from "../assets/styles/style1";
import Box from "../Components/Box";
// apollo
import { useMutation } from "@apollo/client";
// graphQl
import { TRADE } from "../Query";

function User({ user }) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 14,
        marginVertical: 6,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{user.title}</Text>
        <Text style={styles.scho}>{user.scho}</Text>

        <Text style={styles.psysical}>{user.psysical}</Text>
      </View>
      <View style={styles.num}>
        <Text style={styles.score}>
          {(() => {
            if (user.score >= 90)
              return <Text style={{ color: "#FFD800" }}>{user.score}</Text>;
            else return <Text>{user.score}</Text>;
          })()}
        </Text>
        <Text style={styles.day}>{user.day}</Text>
      </View>
    </View>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "금새인",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "84",
    day: "12.08",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "신재호",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "77",
    day: "12.08",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "금새인",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "91",
    day: "12.08",
  },
  {
    id: "5da1-471f-bd96-145571e29d72",
    title: "정해일",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "84",
    day: "12.08",
  },
  {
    id: "58694a0f-3da1-4145571e29d72",
    title: "정해일",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "84",
    day: "12.08",
  },
  {
    id: "58694da1-471f-bd96-145571e29d72",
    title: "정해일",
    scho: "중등부",
    psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
    score: "84",
    day: "12.08",
  },
];
const Item = ({ title, scho, psysical, score, day }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      backgroundColor: "gray",
      padding: 22,
      marginVertical: 10,
    }}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.scho}>{scho}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
    <View style={styles.num}>
      <Text style={styles.psysical}>{psysical}</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  </View>
);
const renderItem = ({ item }) => (
  <Item
    title={item.title}
    scho={item.scho}
    psysical={item.psysical}
    score={item.score}
    day={item.day}
  />
);

function Home({ navigation }) {
  const [tabVal, setTab] = React.useState(false);
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              {/* {props.user.name} */}심재혁
              <Text style={{ fontSize: 24, fontWeight: "normal" }}>님</Text>
            </Text>
          </View>
          <Text style={{ fontSize: 24 }}>환영합니다.</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.UserImage}>
            <Image
              source={require("../assets/Image.png")}
              style={{ height: 70, width: 70, borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Contents}>
        <ScrollView>
          <View style={styles.Boxes}>
            <Box
              text={"주간\n수업 스케줄"}
              num={12}
              color={"#335AC8"}
              ml={10}
              mr={13}
            ></Box>
            <Box
              text={"수강생\n현황"}
              num={36}
              color={"#5BAFD0"}
              ml={5}
              mr={10}
            ></Box>
          </View>
          <View style={styles.Boxes}>
            <Box
              text={"수강생\n코칭 기록"}
              num={18}
              color={"#D86C35"}
              ml={10}
              mr={5}
            ></Box>
            <Box
              text={"커뮤니티\n현황"}
              num={36}
              color={"#D05BAF"}
              ml={10}
              mr={10}
            ></Box>
          </View>
          <View style={styles.content2}>
            <Text style={{ fontSize: 16, marginLeft: "3%" }}>
              최근 코칭기록
            </Text>
            <User user={DATA[0]} />
            <User user={DATA[1]} />
            <User user={DATA[2]} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={{ alignItems: "center" }}
        >
          <HomeSvg />
          <Text style={{ fontSize: 12 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("CoachPg")}
          style={{ alignItems: "center" }}
        >
          <CoachSvg />
          <Text style={{ fontSize: 12, color: "gray" }}>코칭기록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SchePg")}
          style={{ alignItems: "center" }}
        >
          <ScheSvg />
          <Text style={{ fontSize: 12, color: "gray" }}> 스케줄</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("ComPg")}
          style={{ alignItems: "center" }}
        >
          <ComSvg />
          <Text style={{ fontSize: 12, color: "gray" }}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("MyPg")}
          style={{ alignItems: "center" }}
        >
          <MypgSvg />
          <Text style={{ fontSize: 12, color: "gray" }}>마이페이지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const localstyle = StyleSheet.create({
  container: {},
});

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    flexDirection: "row",
    marginTop: getStatusBarHeight(),
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerLeft: {
    paddingLeft: 20,
    paddingRight: "20%",
    overflow: "visible",
    flex: 1,
  },
  headerRight: {
    width: 200,
    position: "absolute",
    left: "70%",
    borderRightWidth: 20,
  },
  Contents: { flex: 5 },
  Boxes: {
    // flexWrap: "wrap",
    // marginBottom: 10,
    flexDirection: "row",
    marginVertical: "2%",

    // justifyContent: "space-between",
    // overflow: "visible",
    // alignItems: "flex-start",
    // width: "100%",
  },
  content2: { paddingHorizontal: 15, marginTop: 20, marginHorizontal: 15 },
  item: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    marginVertical: 8,
    paddingLeft: 16,
    overflow: "hidden",
    borderRadius: 10,
  },
  footer: {
    flex: 0.6,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  item: {
    flex: 5 / 6,
    // marginHorizontal: 16,
  },
  num: {
    flex: 1 / 6,
    marginTop: "1%",
    // marginRight: "80%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  scho: {
    color: "black",
    marginVertical: "2%",
    fontSize: 14,
  },
  psysical: {
    color: "black",
    fontSize: 11,
    marginTop: "2%",
  },
  score: {
    fontSize: 36,
  },
  day: {
    marginLeft: "8%",
    padding: "2%",
    marginTop: "4%",
    fontSize: 12,
  },
});
