import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Avatar = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#ffffff", // Border using your color palette
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
});

export default Avatar;
