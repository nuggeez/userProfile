import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";

// Import your icons
const icons = {
  Instagram: require("../../assets/instagram.webp"), // Update with your path
  Twitter: require("../../assets/twitter.webp"), // Update with your path
  Facebook: require("../../assets/facebook.webp"), // Update with your path
};

const SocialMedias = ({ socialMedias }) => {
  const links = {
    Instagram: "https://www.instagram.com/mikaii.ai?igsh=NmE4aTJ4MG8yZmc1",
    Twitter: "https://x.com/fqpamprs",
    Facebook: "https://www.facebook.com/kyla.gabriento",
  };

  const handlePress = (socialMedia) => {
    const url = links[socialMedia];
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("An error occurred", err)
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social Medias</Text>
      {socialMedias.map((socialMedia, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(socialMedia)}
          style={styles.socialMediaContainer}
        >
          <Image source={icons[socialMedia]} style={styles.icon} />
          <Text style={styles.socialMedia}>{socialMedia}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFFFFF", // White text color
  },
  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically centered
    marginVertical: 2,
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    marginRight: 10, // Space between icon and text
  },
  socialMedia: {
    fontSize: 16,
    color: "#FFFFFF", // White text color
  },
});

export default SocialMedias;
