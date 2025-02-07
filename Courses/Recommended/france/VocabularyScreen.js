import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const vocabularyList = [
  { french: 'Bonjour', english: 'Hello' },
  { french: 'Merci', english: 'Thank you' },
  { french: 'S\'il vous plaît', english: 'Please' },
  { french: 'Au revoir', english: 'Goodbye' },
  { french: 'Excusez-moi', english: 'Excuse me' },
  { french: 'Oui', english: 'Yes' },
  { french: 'Non', english: 'No' },
  { french: 'Comment ça va?', english: 'How are you?' },
  { french: 'Ça va bien', english: 'I am fine' },
  { french: 'Je t\'aime', english: 'I love you' },
  { french: 'Félicitations', english: 'Congratulations' },
  { french: 'Bonne nuit', english: 'Good night' },
  { french: 'Bon appétit', english: 'Enjoy your meal' },
  { french: 'Santé', english: 'Cheers' },
  { french: 'Où est la salle de bain?', english: 'Where is the bathroom?' },
  { french: 'Pardon', english: 'Sorry' },
  { french: 'Bon matin', english: 'Good morning' },
  { french: 'Bonne après-midi', english: 'Good afternoon' },
  { french: 'Bonne soirée', english: 'Good evening' },
  { french: 'Comment vous appelez-vous?', english: 'What is your name?' },
  { french: 'Je m\'appelle', english: 'My name is' },
  { french: 'Enchanté', english: 'Nice to meet you' },
  { french: 'D\'accord', english: 'OK' },
  { french: 'Bienvenue', english: 'Welcome' },
  { french: 'Bon voyage', english: 'Have a good trip' },
  { french: 'Joyeux anniversaire', english: 'Happy birthday' },
  { french: 'Joyeux Noël', english: 'Merry Christmas' },
  { french: 'Bonne année', english: 'Happy New Year' },
  { french: 'Amusez-vous bien', english: 'Have fun' },
  { french: 'À bientôt', english: 'See you soon' },
  { french: 'À demain', english: 'See you tomorrow' },
  { french: 'À tout à l\'heure', english: 'See you later' },
  { french: 'À plus tard', english: 'See you later' },
  { french: 'Bonne chance', english: 'Good luck' },
  { french: 'Bon courage', english: 'Be brave' },
  { french: 'Bon travail', english: 'Good job' },
  { french: 'Faites attention', english: 'Be careful' },
  { french: 'Bonne journée', english: 'Have a nice day' },
  { french: 'Bonne semaine', english: 'Have a nice week' },
  { french: 'Bon week-end', english: 'Have a nice weekend' },
  { french: 'Bonnes vacances', english: 'Have a nice holiday' },
  { french: 'Bon retour', english: 'Welcome back' },
  { french: 'Bon appétit', english: 'Enjoy your meal' },
  { french: 'Bon courage', english: 'Good luck' },
  { french: 'Bonne santé', english: 'Good health' },
  { french: 'Félicitations', english: 'Congratulations' },
  { french: 'Meilleures salutations', english: 'Best regards' },
  { french: 'Meilleurs vœux', english: 'Best wishes' },
  { french: 'À votre santé', english: 'To your health' }
];

const handlePlayAudio = async (word) => {
  const soundObject = new Audio.Sound();
  try {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(word)}&tl=fr`;
    await soundObject.loadAsync({ uri: url });
    await soundObject.playAsync();
  } catch (error) {
    console.log('Error playing sound:', error);
  } finally {
    soundObject.unloadAsync();
  }
};

const FrenchVocabularyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>French Vocabulary</Text>
      {vocabularyList.map((item, index) => (
        <View key={index} style={styles.vocabularyItem}>
          <View>
            <Text style={styles.frenchWord}>{item.french}</Text>
            <Text style={styles.englishTranslation}>{item.english}</Text>
          </View>
          <TouchableOpacity style={styles.audioButton} onPress={() => handlePlayAudio(item.french)}>
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
  frenchWord: {
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

export default FrenchVocabularyScreen;