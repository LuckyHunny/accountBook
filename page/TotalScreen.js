import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TotalScreen = () => {
  console.log('TotalScreen rendered');
  return (
    <View style={styles.container}>
      <Text>Total Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TotalScreen;