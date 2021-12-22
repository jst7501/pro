import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

export default function App() {
  useEffect(() => {
    console.log("모든 요소가 변경될때 마다 실행");
  });
  const name = "해일";
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>
        {(() => {
          if (name === "해일") return <Text>하이{name}</Text>;
          else if (name === "Mary") return "My name is Mary";
          else return <Text style={{ color: "red" }}>바이{name}</Text>;
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
