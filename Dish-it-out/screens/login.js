import React, { useState } from 'react';
import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Modal, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import styles from '../styles/loginstyles';

// Supabase configuration
const supabaseUrl = 'https://swvrzgrpqspparlibyug.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dnJ6Z3JwcXNwcGFybGlieXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MzMyOTEsImV4cCI6MjA0NjAwOTI5MX0.CwYqmcQ5f2JT5A8THcsLwoTHA0S0w4joeeFApyscqOg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Login = () => {
  const navigation = useNavigation();  // Use navigation hook

  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRePassword, setSignupRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation Functions
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordMatch = (password, rePassword) => password === rePassword;

  // Function to reset signup fields
  const resetSignupFields = () => {
    setSignupEmail('');
    setSignupPassword('');
    setSignupRePassword('');
  };

  // Handle login logic
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Login Error', error.message);
    } else {
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('Home');  // Navigate to Home screen
    }
  };

  // Handle signup logic
  const handleSignup = async () => {
    if (
      !signupEmail.trim() ||
      !signupPassword.trim() ||
      !signupRePassword.trim()
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
  
    if (!isValidEmail(signupEmail)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (signupPassword.length < 6) {
      Alert.alert('Error', 'Password should be at least 6 characters long.');
      return;
    }
    if (!isPasswordMatch(signupPassword, signupRePassword)) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
  
    try {
      // Try to sign up the user using Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,  // Use the plain password for Supabase Auth
      });
  
      if (error) {
        console.log(error);  // Log the error to see the exact message returned
        if (error.message.includes('already registered')) {
          Alert.alert('Signup Error', 'This email is already registered. Please use a different email.');
        } else {
          Alert.alert('Signup Error', error.message);
        }
      } else {
        // After successful sign-up, insert user into your custom "users" table without hashing the password
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            {
              email: signupEmail,
              password: signupPassword,  // Store the plain password (not hashed)
              created_at: new Date().toISOString(),
            }
          ]);
  
        if (insertError) {
          Alert.alert('Error', 'Failed to create user profile.');
          console.error(insertError);
        } else {
          Alert.alert('Success', 'Account created successfully!');
          resetSignupFields();
          setSignupModalVisible(false);
          navigation.navigate('Login'); // Navigate to the Login screen
        }
      }
    } catch (err) {
      // Handle unexpected errors
      Alert.alert('Unexpected Error', 'An unexpected error occurred. Please try again later.');
      console.error(err);  // Log any unexpected errors for debugging
    }
  }; 
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.up}>
          <Image source={require('../assets/logo2.jpeg')} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.log}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSignupModalVisible(true)}>
              <Text style={styles.text}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="fade"
        transparent={true}
        visible={signupModalVisible}
        onRequestClose={() => {
          resetSignupFields();
          setSignupModalVisible(false);
        }}
      >
        <KeyboardAvoidingView style={styles.modalContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Sign Up</Text>
              <TextInput style={styles.input} placeholder="Email" placeholderTextColor="black" value={signupEmail} onChangeText={setSignupEmail} />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry={!showPassword}
                  value={signupPassword}
                  onChangeText={setSignupPassword}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.passwordToggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                value={signupRePassword}
                onChangeText={setSignupRePassword}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleSignup}>
                  <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { resetSignupFields(); setSignupModalVisible(false); }}>
                  <Text style={styles.text}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Login;
