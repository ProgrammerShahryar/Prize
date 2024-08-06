import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../SFirebaseMethods/AddMethod';
import sStyle from './styles';

export default function Signup({ navigation }) {
  const [email,
     sEmail] =
   useState('');

  const [password,
     sPassword] =
   useState('');

  const [error,
     sError] =
   useState('');

  const sSignup =
   () => {
    const auth =
     getAuth(
        app
    );


    createUserWithEmailAndPassword(
        auth,
         email,
          password)
      .then(() => {
        navigation.navigate(
            'Login'
        );
      })
      .catch(error => sError(
        error.message
    ));


  };

  return (
    <View style=
    {sStyle.container}>
      <Text style=
      {sStyle.header}>Sign Up</Text>
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


      <Button title="Sign Up" onPress=
      {sSignup} color="#32CD32" />
      {error ? <Text style={sStyle.error}>{error}</Text> : null}
    </View>
  );
}
