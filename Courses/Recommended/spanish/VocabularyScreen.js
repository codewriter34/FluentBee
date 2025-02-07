import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const vocabularyList = [
  { spanish: 'Hola', english: 'Hello' },
  { spanish: 'Adiós', english: 'Goodbye' },
  { spanish: 'Por favor', english: 'Please' },
  { spanish: 'Gracias', english: 'Thank you' },
  { spanish: 'Sí', english: 'Yes' },
  { spanish: 'No', english: 'No' },
  { spanish: 'Buenos días', english: 'Good morning' },
  { spanish: 'Buenas tardes', english: 'Good afternoon' },
  { spanish: 'Buenas noches', english: 'Good night' },
  { spanish: 'Perdón', english: 'Sorry' },
  { spanish: 'Salud', english: 'Bless you' },
  { spanish: '¿Cómo estás?', english: 'How are you?' },
  { spanish: 'Estoy bien', english: 'I am fine' },
  { spanish: '¿Qué tal?', english: 'What’s up?' },
  { spanish: 'Hasta luego', english: 'See you later' },
  { spanish: 'Hasta mañana', english: 'See you tomorrow' },
  { spanish: 'Te quiero', english: 'I love you' },
  { spanish: 'Feliz cumpleaños', english: 'Happy birthday' },
  { spanish: 'Feliz Navidad', english: 'Merry Christmas' },
  { spanish: 'Feliz Año Nuevo', english: 'Happy New Year' },
  { spanish: 'Bienvenido', english: 'Welcome' },
  { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?' },
  { spanish: 'Café', english: 'Coffee' },
  { spanish: 'Agua', english: 'Water' },
  { spanish: 'Leche', english: 'Milk' },
  { spanish: 'Pan', english: 'Bread' },
  { spanish: 'Queso', english: 'Cheese' },
  { spanish: 'Vino', english: 'Wine' },
  { spanish: 'Cerveza', english: 'Beer' },
  { spanish: 'Carne', english: 'Meat' },
  { spanish: 'Pollo', english: 'Chicken' },
  { spanish: 'Pescado', english: 'Fish' },
  { spanish: 'Fruta', english: 'Fruit' },
  { spanish: 'Verdura', english: 'Vegetable' },
  { spanish: 'Azúcar', english: 'Sugar' },
  { spanish: 'Sal', english: 'Salt' },
  { spanish: 'Pimienta', english: 'Pepper' },
  { spanish: 'Aceite', english: 'Oil' },
  { spanish: 'Mantequilla', english: 'Butter' },
  { spanish: 'Huevo', english: 'Egg' },
  { spanish: 'Arroz', english: 'Rice' },
  { spanish: 'Pasta', english: 'Pasta' },
  { spanish: 'Sopa', english: 'Soup' },
  { spanish: 'Ensalada', english: 'Salad' },
  { spanish: 'Pizza', english: 'Pizza' },
  { spanish: 'Hamburguesa', english: 'Burger' },
  { spanish: 'Helado', english: 'Ice cream' },
  { spanish: 'Chocolate', english: 'Chocolate' },
  { spanish: 'Pastel', english: 'Cake' },
];

const handlePlayAudio = async (word) => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync({ uri: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${word}&tl=es` });
    await soundObject.playAsync();
  } catch (error) {
    console.log(error);
  }
};

const VocabularyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Vocabulary</Text>
      {vocabularyList.map((item, index) => (
        <View key={index} style={styles.vocabularyItem}>
          <View>
            <Text style={styles.spanishWord}>{item.spanish}</Text>
            <Text style={styles.englishTranslation}>{item.english}</Text>
          </View>
          <TouchableOpacity style={styles.audioButton} onPress={() => handlePlayAudio(item.spanish)}>
            <Text style={styles.audioButtonText}>🔊</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  vocabularyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  spanishWord: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  englishTranslation: {
    fontSize: 16,
    color: '#666',
  },
  audioButton: {
    padding: 10,
  },
  audioButtonText: {
    fontSize: 18,
  },
});

export default VocabularyScreen;