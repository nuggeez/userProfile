import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Import your hobby icons
const hobbyIcons = {
  Watching: require("../../assets/netf.webp"), // Update with your path
  Gaming: require("../../assets/robxx.jpg"), // Update with your path
  Eating: require("../../assets/food.jpg"), // Update with your path
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
    flexWrap: "wrap", // Allows items to wrap to the next line
    justifyContent: "center", // Center align the items
  },
  hobbyContainer: {
    alignItems: "center",
    margin: 10, // Adjust spacing between hobbies
  },
  icon: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
  },
  hobby: {
    fontSize: 16,
    marginTop: 5,
    color: "#FFFFFF",
  },
});

export default Hobbies;
