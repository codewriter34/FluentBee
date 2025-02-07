import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressScreen = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const storedProgress = await AsyncStorage.getItem('userProgress');
        if (storedProgress) {
          setProgress(JSON.parse(storedProgress));
        }
      } catch (error) {
        console.error('Failed to fetch progress:', error);
      }
    };

    fetchProgress();
  }, []);

  const resetProgress = async () => {
    try {
      await AsyncStorage.removeItem('userProgress');
      setProgress({});
    } catch (error) {
      console.error('Failed to reset progress:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <Text style={styles.content}>Track your progress and see how far you've come in learning Spanish. This section will show you the lessons you've completed, scores from quizzes, and more.</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>Lessons Completed:</Text>
        {progress.lessonsCompleted ? (
          progress.lessonsCompleted.map((lesson, index) => (
            <Text key={index} style={styles.progressItem}>
              {lesson}
            </Text>
          ))
        ) : (
          <Text style={styles.progressItem}>No lessons completed yet.</Text>
        )}

        <Text style={styles.progressTitle}>Quiz Scores:</Text>
        {progress.quizScores ? (
          progress.quizScores.map((quiz, index) => (
            <Text key={index} style={styles.progressItem}>
              {quiz.title}: {quiz.score} / {quiz.total}
            </Text>
          ))
        ) : (
          <Text style={styles.progressItem}>No quiz scores yet.</Text>
        )}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetProgress}>
        <Text style={styles.resetButtonText}>Reset Progress</Text>
      </TouchableOpacity>
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
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  resetButton: {
    backgroundColor: '#ff6961',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProgressScreen;