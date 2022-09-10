import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Terminal() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.top}>Terminal</Text>
      </View>

      <View>
        <Text>GGWPs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F73A2A",
    borderRadius: 8,
    width: "80%",
  },
  top: { backgroundColor: "#A900EF" },
});

//     // top: { backgroundColor: "#A900EF" },
// });
