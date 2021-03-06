import React, { useEffect } from "react";
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
// import styles from "../assets/styles/haeilstyle";
import { SvgXml } from "react-native-svg";
import HomeSvg from "../svgs/HomeSvg";
import CoachSvg from "../svgs/CoachSvgBlack";
import ComSvg from "../svgs/ComSvg";
import MypgSvg from "../svgs/MypgSvg";
import ScheSvg from "../svgs/ScheSvgXml";

const bestNum = ["90", "91", "92", "93", "99"];

const btn = () => {
  navigation.navigate("CchDetail");
};

function CoachPg({ navigation }) {
  const [state, setState] = React.useState({
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "정해일",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: "99",
        day: "12.08",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "정해일",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: "92",
        day: "12.08",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "정해일",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: "34",
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
        score: 80,
        day: "12.08",
      },
    ],
    dat: [
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
        title: "금새인",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: "84",
        day: "12.08",
      },
      {
        id: "58694a0f-3da1-4145571e29d72",
        title: "신재호",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: "77",
        day: "12.08",
      },
      {
        id: "58694da1-471f-96-145571e29d72",
        title: "금새인",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: 91,
        day: "12.08",
      },
      {
        id: "586971f-bd96-145571e29d72",
        title: "금새인",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: 91,
        day: "12.08",
      },
      {
        id: "58694da1-471f-bd96-29d72",
        title: "금새인",
        scho: "중등부",
        psysical: "골밑슛 89 / 레이업 64 / 자유투 77",
        score: 91,
        day: "12.08",
      },
    ],
  });
  // const _getData = () => {
  //   id: Math.random().toString(12).substring(0);
  //   trade({
  //     variables: {
  //       id: "",
  //       title: "",
  //       scho: "",
  //       psysical: "",
  //       score: "",
  //       day: "",
  //     },
  //   }).then((state) => {
  //     console.log(state);
  //     setState({
  //       data: state.data,
  //       page: 1,
  //       refreshing: state.refreshing,
  //     });

  const Item = ({ title, scho, psysical, score, day }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 14,
        marginVertical: 5,
      }}
      onPress={() =>
        navigation.navigate("CchDetail", {
          stdName: title,
          shoot: 54,
          layup: 68,
          free: 38,
          drib: 24,
        })
      }
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.scho}>{scho}</Text>
        <Text style={styles.psysical}>{psysical}</Text>
      </View>
      <View style={styles.num}>
        <Text style={styles.score}>
          {(() => {
            if (score >= 90)
              return <Text style={{ color: "#FFD800" }}>{score}</Text>;
            else return <Text>{score}</Text>;
          })()}
        </Text>
        <Text style={styles.day}>{day}</Text>
      </View>
    </TouchableOpacity>
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

  const [tabVal, setTab] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, marginTop: "15%" }}>코칭기록</Text>
      </View>
      <View style={styles.MoHeader}>
        <View style={styles.SysHeader}>
          <View style={{ flexDirection: "row" }}>
            {tabVal == true ? (
              <TouchableOpacity
                onPress={() => setTab(true)}
                style={{
                  padding: "10%",
                  marginTop: "19%",
                  flex: 1,
                  // height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottomWidth: 3,
                  borderBottomColor: "yellow",
                }}
              >
                <Text style={{ fontSize: 16 }}>수강생 기록</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setTab(true)}
                style={{
                  padding: "10%",
                  marginTop: "19%",
                  flex: 1,
                  // height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  // borderBottomWidth: 3,
                  // borderBottomColor: "yellow",
                }}
              >
                <Text style={{ fontSize: 16 }}>수강생 기록</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.SysHeader1}>
          {tabVal == false ? (
            <TouchableOpacity
              onPress={() => setTab(false)}
              style={{
                padding: "10%",
                marginTop: "19%",
                flex: 1,
                // height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 3,
                borderBottomColor: "red",
              }}
            >
              <Text style={{ fontSize: 16 }}>전체</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setTab(false)}
              style={{
                padding: "10%",
                marginTop: "19%",
                flex: 1,
                // height: 40,
                alignItems: "center",
                justifyContent: "center",
                // borderBottomWidth: 3,
                // borderBottomColor: "red",
              }}
            >
              <Text style={{ fontSize: 16 }}>전체</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.main}>
        {(() => {
          if (tabVal == true)
            return (
              <FlatList
                // style={{ backgroundColor: "white" }}
                data={state.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            );
          else
            return (
              <FlatList
                // style={{ backgroundColor: "white" }}
                data={state.dat}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            );
        })()}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={{ alignItems: "center" }}
        >
          <HomeSvg />
          <Text style={{ fontSize: 12, color: "gray" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("CoachPg")}
          style={{ alignItems: "center" }}
        >
          <CoachSvg />
          <Text style={{ fontSize: 12 }}>코칭기록</Text>
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
    paddingTop: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    // backgroundColor: "red",
    flex: 6,
  },
  // main: {
  //   // backgroundColor: "blue",
  //   flex: 6,
  // },
  footer: {
    flex: 0.6,
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
