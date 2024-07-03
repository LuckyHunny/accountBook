import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Month Screen Test</Text>
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

export default MonthScreen;