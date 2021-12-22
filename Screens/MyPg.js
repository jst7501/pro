import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

const renderItem = ({ item }) => {
  return (
    <View>
      <View>
        <Text>user id: {item.userId}</Text>
      </View>
      <View>
        <Text>id: {item.id}</Text>
      </View>
      <View>
        <Text>title: {item.title}</Text>
      </View>
      <View>
        <Text>body: {item.body}</Text>
      </View>
    </View>
  );
};

const LIMIT = 11;

export default function App() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    data = [
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
    ];
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
}
