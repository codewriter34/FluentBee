import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FranceBeginnersScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>French Basics</Text>
      <Text style={styles.description}>Learn the basics of French through structured lessons, interactive exercises, and cultural insights.</Text>

      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Vocabulary')}>

        <Text style={styles.listItemText}>Vocabulary</Text>
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('FranceGrammarScreen')}>

        <Text style={styles.listItemText}>Grammar</Text>
      </TouchableOpacity>
  
      <View style={styles.separator} />

      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('FrenchExercisesScreen')}>

        <Text style={styles.listItemText}>Interactive Exercises</Text>
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('FrenchProgressScreen')}>

        <Text style={styles.listItemText}>Progress Tracking</Text>
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('FrenchCulturalInsightsScreen')}>

        <Text style={styles.listItemText}>Cultural Insights</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
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
  listItem: {
    padding: 15,
    backgroundColor: '#daf6f2',
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default FranceBeginnersScreen;
