import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './screen/GoogleLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});