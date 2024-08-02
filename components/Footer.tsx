import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Footer= () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2024 Vedicgems All Rights Reserved.
      </Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => handleLinkPress('https://vedicgems.dev.angara.in/b/accessibility')}>
          <Text style={styles.link}>Accessibility</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={() => handleLinkPress('https://vedicgems.dev.angara.in/b/privacy-policy')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={() => handleLinkPress('https://vedicgems.dev.angara.in/b/term-condition')}>
          <Text style={styles.link}>T&C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    marginHorizontal: 4,
  },
  separator: {
    color: '#000',
    fontSize: 14,
  },
});

export default Footer;
