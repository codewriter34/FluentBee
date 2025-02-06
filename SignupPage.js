import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { app } from './FirebaseConfig'; // Ensure Firebase is initialized

const auth = getAuth(app);
const db = getFirestore(app);

export default function SignupPage({ navigation }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSignUp = async () => {
    if (!accepted) {
      Alert.alert("Please accept the terms and conditions.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullname: fullname,
        email: email,
      });

      console.log("Signup Successful!"); // Debug log
      Alert.alert("Signup Successful!", `Welcome, ${fullname}`);
      navigation.navigate('Login'); // Navigate to login page after signup
    } catch (error) {
      console.error("Signup Error:", error); // Debug log
      Alert.alert("Signup Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          style={styles.input}
          value={fullname}
          onChangeText={setFullname}
          placeholder="Enter your full name"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={accepted}
          onValueChange={setAccepted}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>I accept Terms and Conditions</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={handleSignUp}
        disabled={!accepted} // Disable button if terms are not accepted
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>
      
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={24} color="#fff" style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login')}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 1,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: -30,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  signupButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#DB4437', 
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
});