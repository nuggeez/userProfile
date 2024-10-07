import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../../components/Avatar";

const UserInfo = ({ uri, username, fullName, bio, followers, following }) => {
  return (
    <View style={styles.container}>
      <Avatar uri={uri} />
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.followersContainer}>
          <Text style={styles.statsNumber}>{followers}</Text>
          <Text style={styles.statsLabel}>followers</Text>
        </View>
        <View style={styles.followingContainer}>
          <Text style={styles.statsNumber}>{following}</Text>
          <Text style={styles.statsLabel}>following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 15,
    fontWeight: "600", // Semi-bold font weight for iOS style
    color: "#FFFFFF", // White text color
    marginTop: 10,
  },
  fullName: {
    fontSize: 30,
    fontWeight: "bold", // Bold font weight for full name
    color: "#FFFFFF", // White text color
    marginVertical: 5,
  },
  bio: {
    fontSize: 14,
    fontWeight: "400", // Regular font weight for iOS style
    color: "#FFFFFF", // White text color
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Distributes space evenly
    width: "60%",
    marginTop: 10,
  },
  followersContainer: {
    alignItems: "center", // Center the text
  },
  followingContainer: {
    alignItems: "center", // Center the text
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: "600", // Semi-bold font weight
    color: "#00FFFF", // Change the color of the number here
  },
  statsLabel: {
    fontSize: 14,
    color: "#FFFFFF", // White text color for labels
  },
});

export default UserInfo;
