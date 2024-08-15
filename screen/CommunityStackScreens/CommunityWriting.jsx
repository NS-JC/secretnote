import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityWriting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is CommunityWriting page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // Optional: set background color
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default CommunityWriting;
