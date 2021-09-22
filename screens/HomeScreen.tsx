import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ptakim</Text>
      <Button onPress={() => {}} title="New Game" />
      <Button onPress={() => {}} title="Tutorial" />
      <Button
        onPress={() => {
          navigation.navigate("AddNotesScreen");
        }}
        title="Add Notes"
      />
      <Button onPress={() => {}} title="Stats" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
