import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";

const icons = {
  Instagram: require("../../assets/instagram.webp"),
  Twitter: require("../../assets/twitter.webp"),
  Facebook: require("../../assets/facebook.webp"),
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
    color: "#FFFFFF",
  },
  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialMedia: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default SocialMedias;
