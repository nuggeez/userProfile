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
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 10,
  },
  fullName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 5,
  },
  bio: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10,
  },
  followersContainer: {
    alignItems: "center",
  },
  followingContainer: {
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00FFFF",
  },
  statsLabel: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default UserInfo;
