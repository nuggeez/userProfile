import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const hobbyIcons = {
  Watching: require("../../assets/netf.webp"),
  Gaming: require("../../assets/robxx.jpg"),
  Eating: require("../../assets/food.jpg"),
};

const Hobbies = ({ hobbies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobbies</Text>
      <View style={styles.hobbyList}>
        {hobbies.map((hobby, index) => (
          <View key={index} style={styles.hobbyContainer}>
            <Image source={hobbyIcons[hobby]} style={styles.icon} />
            <Text style={styles.hobby}>{hobby}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    marginBottom: 10,
    color: "#FFFFFF",
    fontSize: 18,
  },
  hobbyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  hobbyContainer: {
    alignItems: "center",
    margin: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  hobby: {
    fontSize: 16,
    marginTop: 5,
    color: "#FFFFFF",
  },
});

export default Hobbies;
