import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ProfileScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E1", // Vintage background
  },
});
