import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GermanEssentials = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>German Essentials</Text>
      <Text style={styles.description}>Essential German phrases and words.</Text>
      {/* Add more content here for language learning, such as lessons, exercises, quizzes, etc. */}
      <Text style={styles.content}>
        Here you can add interactive content, lessons, exercises, quizzes, and other resources to help users learn essential German phrases and words.
      </Text>
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
  content: {
    fontSize: 14,
  },
});

export default GermanEssentials;