import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../SFirebaseMethods/AddMethod';
import sStyle from './styles';

export default function Login({ navigation }) {
  const [email, sEmail] =
   useState('');


  const [password,
     sPassword] =
   useState('');


  const [error, sError] =
   useState('');

  const sLogin = () => {
    const auth =
     getAuth(app);


    signInWithEmailAndPassword(auth,
         email,
        password)
      .then(() =>
        {
        navigation.navigate('Home');
      })
      .catch(error => sError(
        error.message
    ));


  };

  return (
    <View style={sStyle.container}>
      <Text style={sStyle.header}>Login</Text>
      <TextInput
        placeholder=
        "Email"
        value=
        {email}
        onChangeText=
        {sEmail}
        style=
        {sStyle.input}
        keyboardType=
        "email-address"
      />


      <TextInput
        placeholder=
        "Password"
        value=
        {password}
        onChangeText=
        {sPassword}
        style=
        {sStyle.input}
        secureTextEntry
      />


      <Button title=
      "Login" onPress={sLogin} color=
      "#1E90FF" />

      
      <Button
        title=
        "Sign Up"
        onPress={() => navigation.navigate(
            'Signup'
        )}
        color=
        "#32CD32"
      />
      {error ? <Text style={sStyle.error}>{error}</Text> : null}
    </View>
  );
}
