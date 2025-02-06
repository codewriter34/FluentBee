import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const beeColor = '#f9c74f'; 

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image source={require('./bee2.jpg')} style={styles.image} />
        <Text style={styles.title}>Cheerful and Interesting</Text>
        <Text style={styles.description}>
          Discover interactive lessons and engaging exercises designed to help you master a new language quickly and effectively.
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Already have an account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  topContent: {
    alignItems: 'center',
    marginTop: 140,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20, 
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20, 
    marginBottom: 30,
    color: '#666',
  },
  bottomContent: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: beeColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: beeColor,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
