import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const categories = [
  { name: "Locations", data: ["Israel", "USA", "Canada"] },
  { name: "Sports", data: ["soccer", "football", "tennis"] },
];

export default function AddNotesScreen({
  navigation,
}: RootTabScreenProps<"AddNotesScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Notes</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {categories.map((category, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
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
