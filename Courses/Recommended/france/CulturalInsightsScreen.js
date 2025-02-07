import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FrenchCulturalInsightsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cultural Insights</Text>
      <Text style={styles.description}>Explore the rich culture of France, including traditions, cuisine, and history.</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>French Cuisine</Text>
        <Image 
          source={{ uri: 'https://example.com/french_cuisine.jpg' }}
          style={styles.image}
        />
        <Text style={styles.content}>
          French cuisine is renowned worldwide. Some famous dishes include Coq au Vin, Ratatouille, and Baguettes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>French Traditions</Text>
        <Image 
          source={{ uri: 'https://example.com/french_traditions.jpg' }}
          style={styles.image}
        />
        <Text style={styles.content}>
          France has a rich tradition of cultural festivals such as Bastille Day, La Fête de la Musique, and the Cannes Film Festival.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>French History</Text>
        <Image 
          source={{ uri: 'https://example.com/french_history.jpg' }}
          style={styles.image}
        />
        <Text style={styles.content}>
          France has a long and storied history, from the Roman era to the modern Republic. Key historical figures include Napoleon Bonaparte and Joan of Arc.
        </Text>
      </View>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default FrenchCulturalInsightsScreen;