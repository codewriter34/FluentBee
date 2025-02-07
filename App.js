import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './homepage';
import SpanishBasics from './Courses/Recommended/spanish/SpanishBasics';

import GermanEssentials from './Courses/Recommended/GermanEssentials';
import FrenchVocabularyScreen from './Courses/Recommended/france/VocabularyScreen';
import GrammarScreen from './Courses/Recommended/france/GrammarScreen';
import ExercisesScreen from './Courses/Recommended/france/ExercisesScreen';
import ProgressScreen from './Courses/Recommended/france/ProgressScreen';
import CulturalInsightsScreen from './Courses/Recommended/france/CulturalInsightsScreen';
import FranceBeginnersScreen from './Courses/Recommended/france/FranceBeginners';
import FranceGrammarScreen from './Courses/Recommended/france/GrammarScreen';
import FrenchExercisesScreen from './Courses/Recommended/france/ExercisesScreen';
import FrenchProgressScreen from './Courses/Recommended/france/ProgressScreen';
import FrenchCulturalInsightsScreen from './Courses/Recommended/france/CulturalInsightsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} /> 
        <Stack.Screen name="SpanishBasics" component={SpanishBasics}  
         options={{
            headerShown: true,
            headerTitle: 'Spanish basics',
            headerBackTitle: 'Back',
          }}/>
        <Stack.Screen name="FrenchForBeginners" component={FranceBeginnersScreen}
          options={{
            headerShown: true,
            headerTitle: 'French for Beginners',
            headerBackTitle: 'Back',
          }} />
        <Stack.Screen name="GermanEssentials" component={GermanEssentials} 
          options={{
            headerShown: true,
            headerTitle: 'German Essentials',
            headerBackTitle: 'Back',
          }}/>
        <Stack.Screen name="Vocabulary" component={FrenchVocabularyScreen} 
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
                  <Stack.Screen name="FranceGrammarScreen" component={FranceGrammarScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
          <Stack.Screen name="FrenchExercisesScreen" component={FrenchExercisesScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
          <Stack.Screen name="FrenchProgressScreen" component={FrenchProgressScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
          <Stack.Screen name="FrenchCulturalInsightsScreen" component={FrenchCulturalInsightsScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
        <Stack.Screen name="Grammar" component={GrammarScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
        <Stack.Screen name="Exercises" component={ExercisesScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
        <Stack.Screen name="Progress" component={ProgressScreen} 
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }} />
        <Stack.Screen name="CulturalInsights" component={CulturalInsightsScreen}  
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
