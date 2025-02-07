import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

const quizzes = [
  {
    title: 'Quiz 1',
    exercises: [
      {
        question: "Comment dit-on 'Hello' en français?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correctAnswer: "Bonjour",
      },
      {
        question: "Comment dit-on 'Thank you' en français?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correctAnswer: "Merci",
      },
      {
        question: "Quel est le mot français pour 'One'?",
        options: ["Un", "Deux", "Trois", "Quatre"],
        correctAnswer: "Un",
      },
      {
        question: "Comment dit-on 'Good morning' en français?",
        options: ["Bonne nuit", "Bon après-midi", "Bonjour", "Salut"],
        correctAnswer: "Bonjour",
      },
      {
        question: "Comment dit-on 'Please' en français?",
        options: ["S'il vous plaît", "Merci", "Pardon", "Salut"],
        correctAnswer: "S'il vous plaît",
      },
    ],
  },
  {
    title: 'Quiz 2',
    exercises: [
      {
        question: "Comment dit-on 'Goodbye' en français?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correctAnswer: "Au revoir",
      },
      {
        question: "Comment dit-on 'Please' en français?",
        options: ["S'il vous plaît", "Merci", "Bonjour", "Bonne nuit"],
        correctAnswer: "S'il vous plaît",
      },
      {
        question: "Quel est le mot français pour 'Two'?",
        options: ["Un", "Deux", "Trois", "Quatre"],
        correctAnswer: "Deux",
      },
      {
        question: "Comment dit-on 'Good afternoon' en français?",
        options: ["Bonne nuit", "Bon matin", "Bon après-midi", "Bonjour"],
        correctAnswer: "Bon après-midi",
      },
      {
        question: "Comment dit-on 'Sorry' en français?",
        options: ["Pardon", "Merci", "Bonjour", "Au revoir"],
        correctAnswer: "Pardon",
      },
    ],
  },
  {
    title: 'Quiz 3',
    exercises: [
      {
        question: "Comment dit-on 'Yes' en français?",
        options: ["Oui", "Non", "S'il vous plaît", "Merci"],
        correctAnswer: "Oui",
      },
      {
        question: "Comment dit-on 'No' en français?",
        options: ["Bonjour", "Non", "Merci", "S'il vous plaît"],
        correctAnswer: "Non",
      },
      {
        question: "Quel est le mot français pour 'Three'?",
        options: ["Un", "Deux", "Trois", "Quatre"],
        correctAnswer: "Trois",
      },
      {
        question: "Comment dit-on 'Good night' en français?",
        options: ["Bonne nuit", "Bon matin", "Bon après-midi", "Bonjour"],
        correctAnswer: "Bonne nuit",
      },
      {
        question: "Comment dit-on 'Thank you very much' en français?",
        options: ["Merci beaucoup", "Bonjour", "Au revoir", "S'il vous plaît"],
        correctAnswer: "Merci beaucoup",
      },
    ],
  },
  {
    title: 'Quiz 4',
    exercises: [
      {
        question: "Comment dit-on 'Excuse me' en français?",
        options: ["Pardon", "Merci", "Bonjour", "Au revoir"],
        correctAnswer: "Pardon",
      },
      {
        question: "Comment dit-on 'See you later' en français?",
        options: ["À plus tard", "Merci", "Bonjour", "Au revoir"],
        correctAnswer: "À plus tard",
      },
      {
        question: "Quel est le mot français pour 'Four'?",
        options: ["Un", "Deux", "Trois", "Quatre"],
        correctAnswer: "Quatre",
      },
      {
        question: "Comment dit-on 'Excuse me' en français?",
        options: ["Pardon", "Merci", "Bonjour", "Au revoir"],
        correctAnswer: "Pardon",
      },
      {
        question: "Comment dit-on 'See you tomorrow' en français?",
        options: ["À demain", "Merci", "Bonjour", "Au revoir"],
        correctAnswer: "À demain",
      },
    ],
  },
];

const FrenchExercisesScreen = ({ navigation }) => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizzes[currentQuiz].exercises[currentExercise].correctAnswer) {
      setScore(score + 1);
    }

    if (currentExercise < quizzes[currentQuiz].exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleNextQuiz = () => {
    setShowResults(false);
    setCurrentExercise(0);
    setScore(0);
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      alert('Tous les quiz sont terminés!');
    }
  };

  const handleEndQuiz = () => {
    setShowResults(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercices interactifs</Text>
      <Text style={styles.quizTitle}>{quizzes[currentQuiz].title}</Text>
      <Text style={styles.exerciseQuestion}>{quizzes[currentQuiz].exercises[currentExercise].question}</Text>
      {quizzes[currentQuiz].exercises[currentExercise].options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Modal visible={showResults} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Résultats du quiz</Text>
            <Text style={styles.modalScore}>Votre score: {score} / {quizzes[currentQuiz].exercises.length}</Text>
            {quizzes[currentQuiz].exercises.map((exercise, index) => (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.resultQuestion}>{exercise.question}</Text>
                <Text style={styles.resultAnswer}>Réponse correcte: {exercise.correctAnswer}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={handleNextQuiz}>
              <Text style={styles.modalButtonText}>Quiz Suivant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleEndQuiz}>
              <Text style={styles.modalButtonText}>Terminer le Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 20,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalScore: {
    fontSize: 18,
    marginBottom: 15,
  },
  resultItem: {
    marginBottom: 10,
  },
  resultQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultAnswer: {
    fontSize: 16,
    color: '#00695c',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FrenchExercisesScreen;