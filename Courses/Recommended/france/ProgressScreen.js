import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FrenchProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <Text style={styles.description}>Track your progress in learning French.</Text>
      {/* Add progress tracking features as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default FrenchProgressScreen;
