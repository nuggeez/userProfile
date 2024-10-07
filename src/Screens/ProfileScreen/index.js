import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import UserInfo from "../../components/UserInfo";
import SocialMedias from "../../components/SocialMedias";
import Hobbies from "../../components/Hobbies";

const ProfileScreen = () => {
  const user = {
    avatarUri: require("../../assets/340782551_211823504931547_3563998631414897723_n (1).jpg"),
    username: "sushimashta",
    fullName: "Kyla M. Gabriento",
    bio: "I am a sushi master eating",
    followers: 1000,
    following: 1,
    socialMedias: ["Instagram", "Twitter", "Facebook"],
    hobbies: ["Watching", "Gaming", "Eating"],
  };

  const handleLogout = () => {
    Alert.alert("Logged out", "You have been logged out successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <UserInfo
          uri={user.avatarUri}
          username={user.username}
          fullName={user.fullName}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
        />
      </View>
      <View style={styles.card}>
        <SocialMedias socialMedias={user.socialMedias} />
      </View>
      <View style={styles.card}>
        <Hobbies hobbies={user.hobbies} />
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Logged out")}
        >
          <Text style={styles.logoutButtonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  logoutContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
