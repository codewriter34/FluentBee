import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

const quizzes = [
  {
    title: 'Quiz 1',
    exercises: [
      {
        question: "How do you say 'Hello' in Spanish?",
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        correctAnswer: "Hola",
      },
      {
        question: "How do you say 'Thank you' in Spanish?",
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        correctAnswer: "Gracias",
      },
      {
        question: "What is the Spanish word for 'One'?",
        options: ["Uno", "Dos", "Tres", "Cuatro"],
        correctAnswer: "Uno",
      },
      {
        question: "How do you say 'Good morning' in Spanish?",
        options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hola"],
        correctAnswer: "Buenos días",
      },
      {
        question: "How do you say 'Please' in Spanish?",
        options: ["Por favor", "Gracias", "Lo siento", "Hola"],
        correctAnswer: "Por favor",
      },
    ],
  },
  {
    title: 'Quiz 2',
    exercises: [
      {
        question: "How do you say 'Goodbye' in Spanish?",
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        correctAnswer: "Adiós",
      },
      {
        question: "How do you say 'Please' in Spanish?",
        options: ["Por favor", "Gracias", "Hola", "Buenas noches"],
        correctAnswer: "Por favor",
      },
      {
        question: "What is the Spanish word for 'Two'?",
        options: ["Uno", "Dos", "Tres", "Cuatro"],
        correctAnswer: "Dos",
      },
      {
        question: "How do you say 'Good afternoon' in Spanish?",
        options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hola"],
        correctAnswer: "Buenas tardes",
      },
      {
        question: "How do you say 'Sorry' in Spanish?",
        options: ["Perdón", "Gracias", "Hola", "Adiós"],
        correctAnswer: "Perdón",
      },
    ],
  },
  {
    title: 'Quiz 3',
    exercises: [
      {
        question: "How do you say 'Yes' in Spanish?",
        options: ["Sí", "No", "Por favor", "Gracias"],
        correctAnswer: "Sí",
      },
      {
        question: "How do you say 'No' in Spanish?",
        options: ["Hola", "No", "Gracias", "Por favor"],
        correctAnswer: "No",
      },
      {
        question: "What is the Spanish word for 'Three'?",
        options: ["Uno", "Dos", "Tres", "Cuatro"],
        correctAnswer: "Tres",
      },
      {
        question: "How do you say 'Good night' in Spanish?",
        options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hola"],
        correctAnswer: "Buenas noches",
      },
      {
        question: "How do you say 'Thank you very much' in Spanish?",
        options: ["Muchas gracias", "Hola", "Adiós", "Por favor"],
        correctAnswer: "Muchas gracias",
      },
    ],
  },
  {
    title: 'Quiz 4',
    exercises: [
      {
        question: "How do you say 'Excuse me' in Spanish?",
        options: ["Perdón", "Gracias", "Hola", "Adiós"],
        correctAnswer: "Perdón",
      },
      {
        question: "How do you say 'See you later' in Spanish?",
        options: ["Hasta luego", "Gracias", "Hola", "Adiós"],
        correctAnswer: "Hasta luego",
      },
      {
        question: "What is the Spanish word for 'Four'?",
        options: ["Uno", "Dos", "Tres", "Cuatro"],
        correctAnswer: "Cuatro",
      },
      {
        question: "How do you say 'Excuse me' in Spanish?",
        options: ["Perdón", "Gracias", "Hola", "Adiós"],
        correctAnswer: "Perdón",
      },
      {
        question: "How do you say 'See you tomorrow' in Spanish?",
        options: ["Hasta mañana", "Gracias", "Hola", "Adiós"],
        correctAnswer: "Hasta mañana",
      },
    ],
  },
];

const ExercisesScreen = ({ navigation }) => {
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
      alert('All quizzes completed!');
    }
  };

  const handleEndQuiz = () => {
    setShowResults(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Interactive Exercises</Text>
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
            <Text style={styles.modalTitle}>Quiz Results</Text>
            <Text style={styles.modalScore}>Your score: {score} / {quizzes[currentQuiz].exercises.length}</Text>
            {quizzes[currentQuiz].exercises.map((exercise, index) => (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.resultQuestion}>{exercise.question}</Text>
                <Text style={styles.resultAnswer}>Correct answer: {exercise.correctAnswer}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={handleNextQuiz}>
              <Text style={styles.modalButtonText}>Next Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleEndQuiz}>
              <Text style={styles.modalButtonText}>End Quiz</Text>
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

export default ExercisesScreen;