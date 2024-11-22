import React from 'react';
import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../styles/loginstyles';  // Import styles from the styles directory

const Login = () => {
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.up}>
          {/* Logo Image */}
          <Image 
            source={require('../assets/logo2.jpeg')} 
            style={styles.image} 
          />

          {/* Email Input */}
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="black" 
          />

          {/* Password Input */}
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true} 
            placeholderTextColor="black" 
          />

          {/* Login and Sign Up Buttons */}
          <View style={styles.log}>
            <Text style={styles.text}>LOGIN</Text>
            <Text style={styles.text}>SIGN UP</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
